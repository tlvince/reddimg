'use strict';

describe('Service: reddit', function () {

  // load the service's module
  beforeEach(module('reddimgApp'));

  // instantiate service
  var reddit;
  beforeEach(inject(function (_reddit_) {
    reddit = _reddit_;
  }));

  it('should do something', function () {
    expect(!!reddit).toBe(true);
  });

});
