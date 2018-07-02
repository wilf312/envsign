const path = require('path')
const webpack = require('webpack')
const Package = require('./package.json')
const { CheckerPlugin } = require('awesome-typescript-loader')

console.log(process.env.ENV_SIGN)

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  externals: {
    ENV_SIGN: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.DefinePlugin({
      ENV_SIGN: JSON.stringify(process.env.ENV_SIGN),
      ENV_SIGN_SETTING: JSON.stringify(Package.envsign)
    })
  ]
}
