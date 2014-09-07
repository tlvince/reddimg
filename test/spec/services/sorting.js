'use strict';

describe('Service: sorting', function () {

  // load the service's module
  beforeEach(module('reddimgApp'));

  // instantiate service
  var sorting;
  beforeEach(inject(function (_sorting_) {
    sorting = _sorting_;
  }));

  it('should do something', function () {
    expect(!!sorting).toBe(true);
  });

});
