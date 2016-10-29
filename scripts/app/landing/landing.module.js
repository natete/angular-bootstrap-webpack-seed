var routes = require('./landing.routes');
var landingComponent = require('./landing.component');
var landingController = require('./landing.controller');
angular
  .module('app.landing', [])
  .config(routes)
  .component('appLanding', landingComponent)
  .controller('LandingController', landingController);
