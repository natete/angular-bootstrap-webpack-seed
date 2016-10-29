var webpackConfig = require('./webpack.config');
var webpack = require('webpack');

webpackConfig.module.loaders.push(
  {
    test: /scripts.*\.js$/,
    exclude: /node_modules/,
    loaders: [
      'ng-annotate?add=true&remove=true&single_quotes=true',
    ]
  }
);

webpackConfig.plugins = webpackConfig.plugins.concat(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
);

module.exports = webpackConfig;