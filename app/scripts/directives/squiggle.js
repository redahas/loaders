'use strict';

/**
 * @ngdoc directive
 * @name loadersApp.directive:squiggle
 * @description
 * # squiggle
 */
angular.module('loadersApp')
  .directive('squiggle', function () {
    return {
      templateUrl: 'views/templates/squiggle.html',
      restrict: 'E',
      link: function postLink(scope, element) {
      }
    };
  });
