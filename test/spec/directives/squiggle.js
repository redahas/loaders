'use strict';

describe('Directive: squiggle', function () {

  // load the directive's module
  beforeEach(module('loadersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<squiggle></squiggle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the squiggle directive');
  }));
});
