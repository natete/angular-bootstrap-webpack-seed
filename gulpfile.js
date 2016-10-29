var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackDevServer = require("webpack-dev-server");
var config = require('./gulp.config');

// Make gulp global so it can be used by the module
global.GULP = gulp;

global.PROJECT_DIR = __dirname;
global.CONFIG_PATH = __dirname + '/gulp.config';

// Instantiate module gulpfile to make its tasks available
require('./node_modules/matrix-angular-gulp/gulpfile');

// Add new tasks here or overwrite the provided tasks here

/**
 * Creates a dev build using just webpack for it.
 */
gulp.task('webpack:build:dev', function () {
  var webpackConfig = require('./webpack.stg.config');
  webpackConfig.watch = false;

  return gulp
    .src('scripts/app/index.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('build/'));
});

/**
 * Creates a demo build using just webpack for it.
 */
gulp.task('webpack:build:demo', function () {
  var webpackConfig = require('./webpack.demo.config');
  webpackConfig.watch = false;

  return gulp
    .src('scripts/app/index.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('build/'));
});

/**
 * Creates a build using just webpack for it.
 */
gulp.task('webpack:build:dist', function () {
  var webpackConfig = require('./webpack.demo.config');
  webpackConfig.watch = false;

  return gulp
    .src('scripts/app/index.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('build/'));
});

/**
 * Serves dev build using just webpack and webpack-dev-server for it.
 */
gulp.task('webpack:serve:dev', function (done) {
  var webpackConfig = require('./webpack.stg.config');
  webpackConfig.watch = true;
  // Add hot deploy entries
  webpackConfig.entry.unshift(
    'webpack-dev-server/client?http://localhost:' + config.defaultPort + '/',
    'webpack/hot/dev-server');

  // Add hot deploy plugin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  webpackConfig.devtool = 'eval-source-map';
  webpackConfig.debug = true;

  new webpackDevServer(webpack(webpackConfig), {
    publicPath: '/build',
    stats: {
      colors: true
    }
  }).listen(config.defaultPort, function (err) {
    if (err) {
      console.log(err);
      done();
    }
  });
});

/**
 * Serves demo build using just webpack and webpack-dev-server for it.
 */
gulp.task('webpack:serve:dist', function (done) {
  var webpackConfig = require('./webpack.demo.config');
  webpackConfig.watch = true;
  // Add hot deploy entries
  webpackConfig.entry.unshift(
    'webpack-dev-server/client?http://localhost:' + config.defaultPort + '/',
    'webpack/hot/dev-server');
  // Add hot deploy plugin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  webpackConfig.devtool = 'eval-source-map';
  webpackConfig.debug = true;

  new webpackDevServer(webpack(webpackConfig), {
    publicPath: '/build',
    stats: {
      colors: true
    }
  }).listen(config.defaultPort, function (err) {
    if (err) {
      console.log(err);
      done();
    }
  });
});


/**
 * Serves production build using just webpack and a node server for it.
 */
gulp.task('webpack:serve:stg', ['webpack:build:dev'], function () {
  require('child_process').fork('./server');
});

/**
 * Serves production build using just webpack and a node server for it.
 */
gulp.task('webpack:serve:demo', ['webpack:build:demo'], function () {
  require('child_process').fork('./server');
});