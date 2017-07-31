var helpers = require('./helpers');
var webpack = require('webpack');

module.exports = {
  devtool: "inline-source-map",

  resolve: {
    extensions: ['.ts', '.js']
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: helpers.root('src/test'),
        loaders: ['istanbul-instrumenter-loader', 'awesome-typescript-loader', 'angular2-template-loader']
      }, {
        test: /\.ts$/,
        include: helpers.root('src/test'),
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('tsconfig.json')
            }
          },
          'angular2-template-loader'
        ]
      }, {
        test: /\.html$/,
        loader: 'html-loader'

      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      }, {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null-loader'
      }, {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, helpers.root('src'), {})],

  performance: {
    hints: false
  }
};
