'use strict';

/**
 * @ngdoc service
 * @name reddimgApp.route
 * @description
 * # route
 * Service in the reddimgApp.
 */
angular.module('reddimgApp')
  .service('route', function($location) {
    this.sorting = function() {
      return $location.path().substr(1);
    };
  });
