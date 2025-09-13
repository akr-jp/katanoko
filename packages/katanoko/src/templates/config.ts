interface ConfigOptions {
    database: 'postgresql' | 'mysql';
}

const postgresqlTemplate = () => `/**
 * katanoko settings
 */
export type Config = {
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
} | {
    /**
     * Database type
     */
    database: 'mysql';

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
    connectionString: 'postgres://user:password@localhost:5432/database',
    output: {
        dir: './types',
    },
} satisfies Config;
`;

const mysqlTemplate = () => `/**
 * katanoko settings
 */
export type Config = {
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
} | {
    /**
     * Database type
     */
    database: 'mysql';

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
    database: 'mysql',
    connectionString: 'mysql://user:password@localhost:3306/database',
    output: {
        dir: './types',
    },
} satisfies Config;
`;

export const createConfigTemplate = (options: ConfigOptions) => {
    if (options.database === 'mysql') {
        return mysqlTemplate();
    }

    return postgresqlTemplate();
};
