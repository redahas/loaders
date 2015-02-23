'use strict';

/**
 * @ngdoc function
 * @name loadersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loadersApp
 */
angular.module('loadersApp')
  .controller('MainCtrl', function ($scope) {
    $scope.loaderIndex = 1;

    $scope.changeLoader = function(){
    	if($scope.loaderIndex == 1){
    		$scope.loaderIndex = 2;
    	}else if($scope.loaderIndex == 2){
    		$scope.loaderIndex = 3;
    	}else{
    		$scope.loaderIndex = 1;
    	}
    };
  });
