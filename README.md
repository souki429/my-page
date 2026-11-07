# React + TypeScript + Vite

## GitHub Pages へのデプロイ

```sh
npm run deploy
```

ビルドした `dist` の内容を、`origin` の `gh-pages` ブランチへ送信します。
Git のインストールと GitHub への push 権限が必要です。
初回は GitHub の Settings → Pages で Source を「Deploy from a branch」、
Branch を `gh-pages`、フォルダを `/ (root)` に設定してください。
非公開リポジトリでの Pages 利用には、対応する GitHub プランが必要です。
公開先は https://souki429.github.io/my-page/ です。

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
