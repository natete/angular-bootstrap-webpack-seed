require('./core/core.module');

// Yeoman hook. Require modules. Do not remove this comment.
require('./landing/landing.module');

angular
  .module('app', [

    // Shared modules
    'app.core',

    // App modules
    'app.landing'
  ])
  .config(config)
  .run(run);

/* @ngInject */
function config($urlRouterProvider, CoreConstants) {
  'use strict';
  $urlRouterProvider.otherwise('/' + CoreConstants.STATES.LANDING);
}

/* @ngInject */
function run() {
  'use strict';
}
