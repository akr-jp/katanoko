/**
 * katanoko settings
 */
export type Config =
    | {
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
    | {
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

          /**
           * Type mapping from database types to TypeScript types
           */
          typeMapping: {
              [key: string]: string;
          };
      };

/**
 * katanoko settings
 */
export default {
    database: 'postgresql',
    connectionString: 'postgres://katanoko:katanoko@pg-16:5432/katanoko',
    output: {
        dir: './types',
    },
    typeMapping: {
        int2: 'number',
        int4: 'number',
        int8: 'bigint',
        decimal: 'number',
        numeric: 'number',
        float4: 'number',
        float8: 'number',
        varchar: 'string',
        bpchar: 'string',
        text: 'string',
        timestamp: 'string',
        timestamptz: 'string',
        date: 'string',
        time: 'string',
        interval: 'string',
        bytea: 'string',
        bool: 'boolean',
        uuid: 'string',
        json: 'any',
        jsonb: 'any',
        xml: 'string',
        inet: 'string',
        macaddr: 'string',
        macaddr8: 'string',
        box: 'string',
        circle: 'string',
        line: 'string',
        lseg: 'string',
        path: 'string',
        point: 'string',
        polygon: 'string',
        money: 'number',
        pg_lsn: 'string',
    },
} satisfies Config;
