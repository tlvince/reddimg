'use strict';

describe('Controller: ImgsCtrl', function () {

  // load the controller's module
  beforeEach(module('reddimgApp'));

  var ImgsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImgsCtrl = $controller('ImgsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
