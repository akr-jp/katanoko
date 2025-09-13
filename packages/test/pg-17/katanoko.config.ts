/**
 * katanoko settings
 */
export interface Config {
    /**
     * Database type
     */
    database: 'postgresql';

    /**
     * Database connection string
     */
    connectionString: string;

    /**
     * Output settings
     */
    output: {
        /**
         * Output directory for type files
         */
        dir: string;
    };

    /**
     * Type mapping from database types to TypeScript types
     */
    typeMapping: {
        [key: string]: string;
    };
}

/**
 * katanoko settings
 */
export default {
    database: 'postgresql',
    connectionString: 'postgres://katanoko:katanoko@pg-17:5432/katanoko',
    output: {
        dir: './types',
    },
    typeMapping: {
        int4: 'number',
        integer: 'number',
        varchar: 'string',
        text: 'string',
        timestamp: 'string',
        timestamptz: 'string',
        bool: 'boolean',
        json: 'any',
        jsonb: 'any',
    },
} satisfies Config;
