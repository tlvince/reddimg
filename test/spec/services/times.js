'use strict';

describe('Service: times', function () {

  // load the service's module
  beforeEach(module('reddimgApp'));

  // instantiate service
  var times;
  beforeEach(inject(function (_times_) {
    times = _times_;
  }));

  it('should do something', function () {
    expect(!!times).toBe(true);
  });

});
