'use strict';

/**
 * @ngdoc function
 * @name reddimgApp.controller:ImgsCtrl
 * @description
 * # ImgsCtrl
 * Controller of the reddimgApp
 */
angular.module('reddimgApp')
  .controller('ImgsCtrl', function(imgs) {
    this.imgs = imgs;
  });
