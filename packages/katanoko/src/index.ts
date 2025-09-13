#!/usr/bin/env node
import { bundleRequire } from 'bundle-require';
import { cac } from 'cac';
import { promises as fs } from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import { Client } from 'pg';
import pkg from '../package.json';
import { createConfigTemplate } from './templates/config';

const cli = cac('katanoko');

cli.command('init', 'Create a new katanoko.config.ts file').action(async () => {
    const { database } = await inquirer.prompt([
        {
            type: 'list',
            name: 'database',
            message: 'Select a database type',
            choices: ['postgresql', 'mysql'],
        },
    ]);
    const configPath = path.join(process.cwd(), 'katanoko.config.ts');
    const configContent = createConfigTemplate({ database });

    try {
        await fs.writeFile(configPath, configContent);
        console.log('Success: katanoko.config.ts created.');
    } catch (e) {
        console.error('Error: Failed to create katanoko.config.ts.');
        console.error(e);
        process.exit(1);
    }
});

cli.command('gen', 'Generate TypeScript types from the database').action(async () => {
    console.log('Generating types...');

    try {
        // 1. Load config file
        const configPath = path.join(process.cwd(), 'katanoko.config.ts');
        const { mod } = await bundleRequire({ filepath: configPath });
        const config = mod.default;

        // We only support postgresql for now
        if (config.database !== 'postgresql') {
            console.error('Error: Currently, only postgresql is supported.');
            process.exit(1);
        }

        // 2. Connect to database
        const client = new Client({ connectionString: config.connectionString });

        await client.connect();

        // 3. Get table and column info
        const res = await client.query(`
            SELECT table_name, column_name, udt_name AS data_type
            FROM information_schema.columns
            WHERE table_schema = 'public'
            ORDER BY table_name, ordinal_position;
        `);

        await client.end();

        // 4. Generate TypeScript code
        const tables: { [key: string]: { name: string; type: string }[] } = {};

        for (const row of res.rows) {
            if (!tables[row.table_name]) {
                tables[row.table_name] = [];
            }

            tables[row.table_name].push({ name: row.column_name, type: row.data_type });
        }

        const outputDir = path.join(process.cwd(), config.output.dir);

        await fs.mkdir(outputDir, { recursive: true });

        for (const tableName in tables) {
            let interfaceString = `export interface ${toPascalCase(tableName)} {
`;
            for (const column of tables[tableName]) {
                const tsType = config.typeMapping[column.type] || 'any';

                interfaceString += `  ${column.name}: ${tsType};
`;
            }

            interfaceString += `}
`;

            const filePath = path.join(outputDir, `${tableName}.ts`);

            await fs.writeFile(filePath, interfaceString);
            console.log(`Success: ${filePath} created.`);
        }
    } catch (e) {
        console.error('Error: Failed to generate types.');
        console.error(e);
        process.exit(1);
    }
});

function toPascalCase(s: string): string {
    return s.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/_/g, '');
}

cli.help();
cli.version(pkg.version);

cli.parse();
