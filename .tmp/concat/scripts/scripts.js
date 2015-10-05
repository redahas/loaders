'use strict';

/**
 * @ngdoc overview
 * @name loadersApp
 * @description
 * # loadersApp
 *
 * Main module of the application.
 */
angular
  .module('loadersApp', []);

'use strict';

/**
 * @ngdoc function
 * @name loadersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loadersApp
 */
angular.module('loadersApp')
  .controller('MainCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    $rootScope.loaderIndex = 1;

    $scope.changeLoader = function(){
    	if($rootScope.loaderIndex == 1){
    		$rootScope.loaderIndex = 2;
    	}else if($rootScope.loaderIndex == 2){
    		$rootScope.loaderIndex = 3;
        }else if($rootScope.loaderIndex == 3){
            $rootScope.loaderIndex = 4;
    	}else{
    		$rootScope.loaderIndex = 1;
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
  }]);

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
      scope: { strk: '='},
      link: function postLink(scope, element) {
      }
    };
  });

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
      scope: { strk: '='},
      link: function postLink(scope, element, attrs) {
      }
    };
  });

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
