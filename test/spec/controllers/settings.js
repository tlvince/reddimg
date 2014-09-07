'use strict';

describe('Controller: SettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('reddimgApp'));

  var SettingsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    SettingsCtrl = $controller('SettingsCtrl');
  }));

  it('should bind an add function', function () {
    expect(angular.isFunction(SettingsCtrl.add)).toBe(true);
  });
});
