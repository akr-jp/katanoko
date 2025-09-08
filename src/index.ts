#!/usr/bin/env node
import { cac } from 'cac';
import { promises as fs } from 'fs';
import path from 'path';

const cli = cac('katanoko');

const configTemplate = `import type { Config } from "katanoko";

export default {
  database: "postgresql",
  connectionString: "postgres://katanoko:katanoko@pg-17:5432/katanoko",
  output: {
    dir: "./types",
  },
} satisfies Config;
`;

cli.command('init', 'Create a new katanoko.config.ts file').action(async () => {
    const configPath = path.join(process.cwd(), 'katanoko.config.ts');

    try {
        await fs.writeFile(configPath, configTemplate);
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
