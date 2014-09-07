'use strict';

/**
 * @ngdoc function
 * @name reddimgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reddimgApp
 */
angular.module('reddimgApp')
  .controller('MainCtrl', function(imgs, reddit, route, config, localStorageService) {
    var vm = this;

    vm.c = config;

    var redditParams = localStorageService.get(config.settings.store);
    if (angular.isObject(redditParams)) {
      config.reddit.params = redditParams;
    }

    // Initial load
    reddit.load();

    vm.imgs = imgs;
    vm.canLoad = true;

    vm.more = function() {
      vm.canLoad = false;

      var params = {
        after: imgs.after
      };
      var options = {
        append: true
      };

      reddit.load(params, options)
        .finally(function() {
          vm.canLoad = true;
        });
    };

  });
