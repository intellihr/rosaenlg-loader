<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# rosaenlg-loader

Webpack loader for RosaeNLG (https://rosaenlg.org/)

## Getting Started

To begin, you'll need to install `rosaenlg-loader`:

```console
$ npm install rosaenlg-loader --save-dev
```

<!-- isLoader ? use(this) : delete(isPlugin) -->

Then add the loader to your `webpack` config. For example:

**file.pug**

```js
import file from 'file.pug';
```

<!-- isLoader ? use(this) : delete(isPlugin) -->

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ext$/,
        use: [
          {
            loader: `rosaenlg-loader`,
            options: { ...options },
          },
        ],
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Options

### `[option]`

Type: `[type|other-type]`
Default: `[type|null]`

[ option description ]

<!-- isLoader ? use(this) : delete(isPlugin) -->

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        loader: `rosaenlg-loader`,
        options: {
          [option]: '',
        },
      },
    ],
  },
};
```


## Examples

[ example outline text ]

**webpack.config.js**

```js
// Example setup here..
```

**file.pug**

```js
// Source code here...
```

**bundle.js**

```js
// Bundle code here...
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/${package}.svg
[npm-url]: https://npmjs.com/package/${package}
[node]: https://img.shields.io/node/v/${package}.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/${package}.svg
[deps-url]: https://david-dm.org/webpack-contrib/${package}
[tests]: https://dev.azure.com/webpack-contrib/${package}/_apis/build/status/webpack-contrib.${package}?branchName=master
[tests-url]: https://dev.azure.com/webpack-contrib/${package}/_build/latest?definitionId=2&branchName=master
[cover]: https://codecov.io/gh/webpack-contrib/${package}/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/${package}
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=${package}
[size-url]: https://packagephobia.now.sh/result?p=${package}
