require('angular-cookies');
require('angular-sanitize');
require('angular-resource');
require('angular-animate');

require('./constants/constants.module');
require('./directives/directives.module');
require('./factories/factories.module');
require('./modules/storage/storage.module');
require('./filters/filters.module');

require('angular-ui-router');

angular
  .module('app.core', [

    // Angular modules
    'ngCookies',
    'ngSanitize',
    'ngResource',
    'ngAnimate',

    // Reusable modules
    // Yeoman hook. Reusable modules DI. Do not remove this comment.
    'app.core.constants',
    'app.core.directives',
    'app.core.factories',
    'app.core.storage',
    'app.core.filters',

    // 3rd party modules
    'ui.router',
  ]);

  // Yeoman hook. Core module components. Do not remove this comment.
