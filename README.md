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

Then add the loader to your `webpack` config. For example:

**file.pug**

```js
import file from 'file.pug';
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: `rosaenlg-loader`,
            options: {
              language: ['en_US']
            },
          },
        ],
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Options

### language

Type: string|array

Target languages for compilation, e.g. `en_US`, `fr_FR`


## Examples

[ example outline text ]

**webpack.config.js**

```js
{
  test: /\.pug$/,
  use: [
    {
      loader: `rosaenlg-loader`,
      options: {
        language: ['en_US']
      },
    },
  ],
}
```

**file.pug**

```
| example translation
```

**file.js**

```js
import rosaenlg from 'rosaenlg/dist/rollup/rosaenlg_tiny_en_US_3.0.0';
import template from 'file.pug';

const text = template.en_US({
  util: new rosaenlg.NlgLib({ language: 'en_US' })
})
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
