'use strict';

/**
 * @ngdoc function
 * @name loadersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loadersApp
 */
angular.module('loadersApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $rootScope.loaderIndex = 1;

    $scope.changeLoader = function(x){
        console.log(x);
        if(x > 0 && $rootScope.loaderIndex < 4){
            $rootScope.loaderIndex++;
        }else if(x < 1 && $rootScope.loaderIndex > 1){
            $rootScope.loaderIndex--;
        }
    };

    $scope.chooseSlide = function (x){
        switch (x){
            case 1:
                $rootScope.loaderIndex = 1;
                break;
            case 2:
                $rootScope.loaderIndex = 2;
                break;
            case 3:
                $rootScope.loaderIndex = 3;
                break;
            case 4:
                $rootScope.loaderIndex = 4;
                break;
        }
    }
  });
