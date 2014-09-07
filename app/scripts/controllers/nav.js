'use strict';

/**
 * @ngdoc function
 * @name reddimgApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the reddimgApp
 */
angular.module('reddimgApp')
  .controller('NavCtrl', function(nav, imgs, reddit, route, config) {
    this.navs = nav;

    this.choose = function(nav) {
      var params = {
        sorting: nav.id
      };
      reddit.load(params);
    };

    this.isActive = function(nav) {
      var sortBy = route.sorting();
      if (!sortBy) {
        return nav.id === 'hot';
      }
      return nav.id === sortBy;
    };

    this.settings = function(toggle) {
      if (toggle) {
        config.settings.open = !config.settings.open;
      }
      return config.settings.open;
    };

  });
