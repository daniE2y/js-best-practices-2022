# Personal site

Welcome to my personal site! 👋

## Features

- [Webpack](https://webpack.js.org/) (v5)
- [Babel](https://babeljs.io/) with [preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
  - [HTML plugin](https://github.com/BenoitZugmeyer/eslint-plugin-html)
  - And a few other ES2015+ related rules
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app

```
# install dependencies
npm install

# run in dev mode on port 8080
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 8080
npm run start
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
