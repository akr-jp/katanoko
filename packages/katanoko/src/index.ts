#!/usr/bin/env node
import { cac } from 'cac';
import { promises as fs } from 'fs';
import inquirer from 'inquirer';
import path from 'path';
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
        console.log('\u001b[32mSuccess[0m katanoko.config.ts created.');
    } catch (e) {
        console.error('\u001b[31mError[0m Failed to create katanoko.config.ts.');
        console.error(e);
        process.exit(1);
    }
});

cli.help();
cli.version('0.1.0');

cli.parse();
