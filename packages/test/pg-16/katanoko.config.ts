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
} satisfies Config;
