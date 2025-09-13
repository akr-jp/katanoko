# katanoko
データベースから Typescript の型ファイルを生成するツール。

## Installation

```bash
npm install -D katanoko
```

もしくは、`npx`でも直接使えるよ:

```bash
npx katanoko [command] [options]
```

## Usage

### `init`

まず、`init`コマンドで設定ファイルを作成するよ:

```bash
npx katanoko init
```

これを実行すると、プロジェクトに`katanoko.config.ts`ファイルが作られるよ。

### `gen`

次に、`katanoko.config.ts`を編集して、データベースの接続情報とかを設定してね。

最後に、このコマンドを実行して型を生成するんだ:

```bash
npx katanoko gen
```
