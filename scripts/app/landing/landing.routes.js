module.exports = Routes;

/* @ngInject */
function Routes($stateProvider, CoreConstants) {
  'use-strict';

  $stateProvider
    .state(CoreConstants.STATES.LANDING, {
      url: '/' + CoreConstants.STATES.LANDING,
      template: '<app-landing></app-landing>'
    });
}
