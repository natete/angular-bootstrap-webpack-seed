require('angular-local-storage');

var storageService = require('./storage.service');

angular
  .module('app.core.storage', [
    'LocalStorageModule'
  ])
  .config(config)
  .service('StorageService', storageService);

function config(localStorageServiceProvider) {
  'use strict';
  localStorageServiceProvider
    .setPrefix('ESD')
    .setStorageType('localStorage');
}
