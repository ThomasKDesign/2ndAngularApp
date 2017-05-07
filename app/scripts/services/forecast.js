'use strict';

/**
 * @ngdoc service
 * @name 2ndAngularAppApp.forecast
 * @description
 * # forecast
 * Factory in the 2ndAngularAppApp.
 */
angular.module('2ndAngularAppApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=441c45953ff91f82479436265072ab51', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
