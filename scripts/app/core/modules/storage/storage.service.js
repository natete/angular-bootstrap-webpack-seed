module.exports = StorageService;

/* @ngInject */
function StorageService($log, localStorageService) {
  'use strict';

  var service = {};

  ////////////////
  // Public API //
  ////////////////

  service.get = get;
  service.exists = exists;
  service.save = save;
  service.remove = remove;
  service.removeAll = removeAll;
  service.clear = clear;

  /**
   * It returns the saved data with the provided key or undefined.
   * @param {type} key to get the property.
   * @returns saved value or undefined.
   */
  function get(key) {
    var value;
    if (exists(key)) {
      value = localStorageService.get(key);
    }

    return value;
  }

  /**
   * It checks if there is a saved value with the associated key.
   * @param {type} key to associate the value.
   * @return if it exists or it doesn't.
   */
  function exists(key) {
    var exists = false;
    var keys = localStorageService.keys();
    if (keys.length > 0 && keys.indexOf(key) !== -1) {
      exists = true;
    }

    return exists;
  }

  /**
   * It saves the value with the associted key.
   * @param {type} key to associate to the value.
   * @param {type} value to be saved.
   * @returns true if the value was saved.
   */
  function save(key, value) {
    return localStorageService.set(key, value);
  }

  /**
   * It removes the saved data with the provided key.
   * @param {type} key to be deleted.
   * @returns remove the value associated to the provided key.
   */
  function remove(key) {
    var removed = false;
    if (exists(key)) {
      removed = localStorageService.remove(key);
    }
  }

  /**
   * It removes the saved data with the provided key.
   * @param {type} keys to be deleted.
   * @returns remove the values associated to the provided keys.
   */
  function removeAll(keys) {
    var allRemoved = true;
    if (angular.isArray(keys)) {
      angular.forEach(keys, function (value, key) {
        if (exists(value)) {
          if (!remove(value)) {
            allRemoved = false;
          }
        } else {
          $log.warn('The provided key ' + value + ' to be removed doesn\'t exists!');
        }
      });
    } else {
      allRemoved = remove(keys);
    }

    return allRemoved;
  }

  /**
   * It clears all the saved data.
   * @returns the result of the operation.
   */
  function clear() {
    return localStorageService.clearAll();
  }

  return service;
}
