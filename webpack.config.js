var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var bootstrapEntryPoints = require('./webpack.bootstrap.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSass = new ExtractTextPlugin('styles.css');
var path = require('path');

module.exports = {
  context: __dirname + '/scripts/app',
  entry: [
    bootstrapEntryPoints.dev,
    './index'
  ],
  devServer: {
    hot: true,
    inline: true
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractSass.extract(['style', 'css', 'postcss', 'sass'])
      },
      {
        test: /\.(woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot|gif)(\?[\s\S]+)?$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g)$/,
        loaders: ['url?limit=8192&name=[path][name].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=5&interlaced=false'],
        exclude: /node_modules/
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    extractSass,
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jquery": "jquery"
    })
  ],
  resolve: {
    alias: {
    }
  }
};
