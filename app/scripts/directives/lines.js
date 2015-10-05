'use strict';

/**
 * @ngdoc directive
 * @name loadersApp.directive:lines
 * @description
 * # lines
 */
angular.module('loadersApp')
  .directive('lines', function () {
    return {
      templateUrl: 'views/templates/lines.html',
      restrict: 'E',
      scope: {strk: '='},
      link: function postLink(scope, element, attr) {

      }
    };
  });
