CREATE TABLE public.katanoko (
    -- Numeric Types
    col_smallint smallint,
    col_integer integer,
    col_bigint bigint,
    col_decimal decimal(10, 2),
    col_numeric numeric(10, 2),
    col_real real,
    col_double_precision double precision,
    col_smallserial smallserial,
    col_serial serial,
    col_bigserial bigserial,

    -- Character Types
    col_varchar varchar(255),
    col_char char(10),
    col_text text,

    -- Date/Time Types
    col_timestamp timestamp,
    col_timestamptz timestamptz,
    col_date date,
    col_time time,
    col_interval interval,

    -- Binary Data Types
    col_bytea bytea,

    -- Other Data Types
    col_boolean boolean,
    col_uuid uuid,
    col_json json,
    col_jsonb jsonb,
    col_xml xml,
    col_inet inet,
    col_macaddr macaddr,
    col_macaddr8 macaddr8,
    col_box box,
    col_circle circle,
    col_line line,
    col_lseg lseg,
    col_path path,
    col_point point,
    col_polygon polygon,
    col_money money,
    col_pg_lsn pg_lsn,
    
    CONSTRAINT katanoko_pk PRIMARY KEY (col_serial)
);
COMMENT ON COLUMN public.katanoko.col_smallint IS 'smallint';
COMMENT ON COLUMN public.katanoko.col_integer IS 'integer';
COMMENT ON COLUMN public.katanoko.col_bigint IS 'bigint';
COMMENT ON COLUMN public.katanoko.col_decimal IS 'decimal(10, 2)';
COMMENT ON COLUMN public.katanoko.col_numeric IS 'numeric(10, 2)';
COMMENT ON COLUMN public.katanoko.col_real IS 'real';
COMMENT ON COLUMN public.katanoko.col_double_precision IS 'double precision';
COMMENT ON COLUMN public.katanoko.col_smallserial IS 'smallserial';
COMMENT ON COLUMN public.katanoko.col_serial IS 'serial';
COMMENT ON COLUMN public.katanoko.col_bigserial IS 'bigserial';
COMMENT ON COLUMN public.katanoko.col_varchar IS 'varchar(255)';
COMMENT ON COLUMN public.katanoko.col_char IS 'char(10)';
COMMENT ON COLUMN public.katanoko.col_text IS 'text';
COMMENT ON COLUMN public.katanoko.col_timestamp IS 'timestamp';
COMMENT ON COLUMN public.katanoko.col_timestamptz IS 'timestamptz';
COMMENT ON COLUMN public.katanoko.col_date IS 'date';
COMMENT ON COLUMN public.katanoko.col_time IS 'time';
COMMENT ON COLUMN public.katanoko.col_interval IS 'interval';
COMMENT ON COLUMN public.katanoko.col_bytea IS 'bytea';
COMMENT ON COLUMN public.katanoko.col_boolean IS 'boolean';
COMMENT ON COLUMN public.katanoko.col_uuid IS 'uuid';
COMMENT ON COLUMN public.katanoko.col_json IS 'json';
COMMENT ON COLUMN public.katanoko.col_jsonb IS 'jsonb';
COMMENT ON COLUMN public.katanoko.col_xml IS 'xml';
COMMENT ON COLUMN public.katanoko.col_inet IS 'inet';
COMMENT ON COLUMN public.katanoko.col_macaddr IS 'macaddr';
COMMENT ON COLUMN public.katanoko.col_macaddr8 IS 'macaddr8';
COMMENT ON COLUMN public.katanoko.col_box IS 'box';
COMMENT ON COLUMN public.katanoko.col_circle IS 'circle';
COMMENT ON COLUMN public.katanoko.col_line IS 'line';
COMMENT ON COLUMN public.katanoko.col_lseg IS 'lseg';
COMMENT ON COLUMN public.katanoko.col_path IS 'path';
COMMENT ON COLUMN public.katanoko.col_point IS 'point';
COMMENT ON COLUMN public.katanoko.col_polygon IS 'polygon';
COMMENT ON COLUMN public.katanoko.col_money IS 'money';
COMMENT ON COLUMN public.katanoko.col_pg_lsn IS 'pg_lsn';
