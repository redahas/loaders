'use strict';

describe('Directive: circular', function () {

  // load the directive's module
  beforeEach(module('loadersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<circular></circular>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the circular directive');
  }));
});
