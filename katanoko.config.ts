import type { Config } from 'katanoko';

export default {
    database: 'postgresql',
    connectionString: 'postgres://katanoko:katanoko@pg-17:5432/katanoko',
    output: {
        dir: './types',
    },
} satisfies Config;
