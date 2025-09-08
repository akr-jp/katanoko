# katanoko
A tool to generate TypeScript type files from a database.

## Installation

```bash
npm install -D katanoko
```

Or, you can use it directly with `npx`:

```bash
npx katanoko [options]
```

## Usage

First, create a configuration file with the `init` command:

```bash
npx katanoko init
```

This will create a `katanoko.config.ts` file in your project.

Next, edit `katanoko.config.ts` to set up your database connection information.

Finally, run this command to generate the types:

```bash
npx katanoko
```
