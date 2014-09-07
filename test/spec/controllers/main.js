'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('reddimgApp'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    MainCtrl = $controller('MainCtrl');
  }));

  it('should bind images', function() {
    expect(angular.isObject(MainCtrl.imgs)).toBe(true);
  });
});
