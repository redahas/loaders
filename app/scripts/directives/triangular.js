'use strict';

/**
 * @ngdoc directive
 * @name loadersApp.directive:triangular
 * @description
 * # triangular
 */
angular.module('loadersApp')
  .directive('triangular', function () {
    return {
      templateUrl: 'views/templates/triangular.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
