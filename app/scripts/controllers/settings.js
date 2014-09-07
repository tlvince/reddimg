'use strict';

/**
 * @ngdoc function
 * @name reddimgApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the reddimgApp
 */
angular.module('reddimgApp')
  .controller('SettingsCtrl', function(config, times, reddit, localStorageService) {
    this.time = config.reddit.params.time;
    this.times = times;

    this.subreddits = config.reddit.params.subreddits;

    this.add = function() {
      this.subreddits.push('');
    };

    this.remove = function(index) {
      this.subreddits.splice(index, 1);
    };

    this.save = function() {
      config.reddit.params = {
        subreddits: this.subreddits,
        time: this.time,
        after: ''
      };
      config.settings.open = false;
      localStorageService.set(config.settings.store, config.reddit.params);
      reddit.load();
    };
  });
