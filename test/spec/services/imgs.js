'use strict';

describe('Service: imgs', function () {

  // load the service's module
  beforeEach(module('reddimgApp'));

  // instantiate service
  var imgs;
  beforeEach(inject(function (_imgs_) {
    imgs = _imgs_;
  }));

  it('should do something', function () {
    expect(!!imgs).toBe(true);
  });

});
