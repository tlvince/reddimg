'use strict';

describe('Controller: ImgsCtrl', function () {

  // load the controller's module
  beforeEach(module('reddimgApp'));

  var ImgsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ImgsCtrl = $controller('ImgsCtrl');
  }));

  it('should bind images', function () {
    expect(angular.isObject(ImgsCtrl.imgs)).toBe(true);
  });
});
