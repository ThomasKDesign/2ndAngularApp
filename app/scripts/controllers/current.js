'use strict';

/**
 * @ngdoc function
 * @name 2ndAngularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the 2ndAngularAppApp
 */
angular.module('2ndAngularAppApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
        cityID: $routeParams.cityID
    });
  });