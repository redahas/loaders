'use strict';

/**
 * @ngdoc directive
 * @name loadersApp.directive:circular
 * @description
 * # circular
 */
angular.module('loadersApp')
  .directive('circular', function () {
    return {
      templateUrl: 'views/templates/circular.html',
      restrict: 'E',
      scope:{ strk: '=' },
      link: function postLink(scope, element) {
      }
    };
  });
