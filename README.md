<h1 align="center">react-ssr-starter</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/15341301/131251228-40d7de86-ea0a-4cae-89a3-9a74e7f3b280.png" alt="banner" >
</p>

<p align='center'>
  <a href='https://depfu.com/github/htdangkhoa/react-ssr-starter?project_id=30809'>
    <img src='https://badges.depfu.com/badges/f269ac566de71c1081d497d42daec0d6/count.svg' alt='Depfu' />
  </a>

  <a href='https://github.com/htdangkhoa/react-ssr-starter/actions/workflows/ci.yml'>
    <img src='https://github.com/htdangkhoa/react-ssr-starter/actions/workflows/ci.yml/badge.svg' alt='CI' />
  </a>

  <a href="https://www.codefactor.io/repository/github/htdangkhoa/react-ssr-starter">
    <img src="https://www.codefactor.io/repository/github/htdangkhoa/react-ssr-starter/badge" alt="CodeFactor" />
  </a>

  <a href='https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base'>
    <img src='https://img.shields.io/badge/eslint-airbnb-4B32C3.svg' alt='Eslint: airbnb' />
  </a>

  <a href='https://github.com/prettier/prettier'>
    <img src='https://img.shields.io/badge/formatter-prettier-ff69b4.svg' alt='Formatter: prettier' />
  </a>
</p>

## Requirements

- [node >= 12](https://nodejs.org/en/download/)

## Getting Started

```sh
git clone https://github.com/htdangkhoa/react-ssr-starter

yarn install # or npm install

yarn dev # or npm run dev
```

## Features

- [React](https://reactjs.org) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org) - A Predictable State Container for JS Apps
- [Redux Toolkit](https://redux-toolkit.js.org) - The official, opinionated, batteries-included toolset for efficient Redux development
- [Reach Router](https://reach.tech/router) - A small, simple router for React that borrows from React Router
- [pure-http](https://github.com/htdangkhoa/pure-http) - The simple web framework for Node.js with zero dependencies
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - Isomorphic WHATWG Fetch API, for Node & Browserify
- [Webpack](https://webpack.js.org) - App bundling
- [Babel](https://babeljs.io) - The compiler for next generation JavaScript
- [React Refresh](https://github.com/facebook/react/tree/main/packages/react-refresh) - Fast refresh components without losing their state
- [react-helmet](https://github.com/nfl/react-helmet) - A document head manager for React
- [react-helmet-async](https://github.com/staylor/react-helmet-async) - Thread-safe Helmet for React 16+ and friends
- [loadable-component](https://github.com/gregberge/loadable-components) - The recommended Code Splitting library for React
- [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack) - A secure webpack plugin that supports dotenv and other environment variables and only exposes what you choose and use
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) - Serves the files emitted from webpack over the Express server
- [Webpack Hot Middleware](https://github.com/webpack-contrib/webpack-hot-middleware) - Allows you to add hot reloading into the Express server
- [ESLint](https://eslint.org) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io/) - Format code and style
- Integrate [Jest](https://jestjs.io/) with [Supertest](https://github.com/visionmedia/supertest), [Nock](https://github.com/nock/nock) and [React Testing Library](https://github.com/testing-library/react-testing-library) as the solution for writing unit tests with code coverage support

## Scripts

| Script              | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `dev`               | Runs your app on the development server at `localhost:9090`. HMR will be enabled. |
| `build`             | Bundles both server-side and client-side files.                                   |
| `build:server`      | Bundles server-side files in production mode and put it to the `build`.           |
| `build:client`      | Bundles client-side files in production mode and put it to the `public`.          |
| `start`             | Runs your app after bundled.                                                      |
| `test`              | Runs testing.                                                                     |
| `docker`            | Builds then run docker.                                                           |
| `docker:build`      | Builds docker.                                                                    |
| `docker:run`        | Runs docker.                                                                      |
| `gen` or `generate` | Generate React component automatic based on template.                             |

## Generators

#### Usage

- npm

  ```sh
  npm run gen component "<component_name>"

  npm run generate component "<component_name>"
  ```

- Yarn

  ```sh
  yarn gen component "<component_name>"

  yarn generate component "<component_name>"
  ```

#### Example

```sh
yarn gen component "hello world"

# or npm run gen component "hello world"
```

Output: `/src/client/components/HelloWorld/index.jsx` will be generated. `/src/client/components/HelloWorld/__tests__/index.test.jsx` will be generated if you want add the unit testing.

#### Custom

You can add template in `generators` directory, please read more at [plopjs](https://github.com/plopjs/plop).
