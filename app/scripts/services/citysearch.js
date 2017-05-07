'use strict';

/**
 * @ngdoc service
 * @name 2ndAngularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the 2ndAngularAppApp.
 */
angular.module('2ndAngularAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=441c45953ff91f82479436265072ab51', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });

  
