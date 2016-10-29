require('angular');
require('bootstrap-loader');
require('./app');

angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});
