module.exports = LandingController;

/* @ngInject */
function LandingController() {
  'use strict';

  var vm = this;

  activate();

  function activate() {
    vm.title = 'Landing page';
  }
}
