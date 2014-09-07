'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('reddimgApp'));

  var NavCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    NavCtrl = $controller('NavCtrl');
  }));

  it('should bind a chosoe function', function () {
    expect(angular.isFunction(NavCtrl.choose)).toBe(true);
  });
});
