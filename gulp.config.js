var config = require('./node_modules/matrix-angular-gulp/gulp/gulp.config');

module.exports = function() {
  // Add here your own configs or overwrite the values you want.

  config.packageMode = 'WEBPACK';

  config.defaultPort = 8080;

  config.style.autoprefixerOptions = {
    browsers: [
      'Android 2.3',
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer >= 8',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6'
    ]
  };

  config.paths.webpack.folder = './build/';

  return config;
}();
