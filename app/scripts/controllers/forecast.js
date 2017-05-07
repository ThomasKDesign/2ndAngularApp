'use strict';

/**
 * @ngdoc function
 * @name 2ndAngularAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the 2ndAngularAppApp
 */
angular.module('2ndAngularAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });
