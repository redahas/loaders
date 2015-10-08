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
  .module('loadersApp', ['ui.bootstrap', 'angular-gestures'])
  .config([ 'hammerDefaultOptsProvider', function (hammerDefaultOptsProvider) {
  	hammerDefaultOptsProvider.set({
		recognizers: [
			[Hammer.Tap, {time: 250}],
			[Hammer.Swipe, {time: 250}],
		]
	});
  }]);
