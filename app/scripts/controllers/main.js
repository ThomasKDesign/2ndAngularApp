'use strict';

/**
 * @ngdoc function
 * @name 2ndAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2ndAngularAppApp
 */
angular.module('2ndAngularAppApp')
  .controller('MainCtrl', function ($scope, citysearch) {
    $scope.citiesFound = citysearch.find();

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
