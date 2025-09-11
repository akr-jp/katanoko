CREATE TABLE public.users (
	id uuid NOT NULL,
	name text NOT NULL,
	memo text NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);
COMMENT ON TABLE public.users IS 'users table comment';

-- Column comments

COMMENT ON COLUMN public.users.id IS 'ID';
COMMENT ON COLUMN public.users.name IS 'Username';
COMMENT ON COLUMN public.users.memo IS 'Memo';
