'use strict';

/**
 * @ngdoc service
 * @name reddimgApp.config
 * @description
 * # config
 * Constant in the reddimgApp.
 */
angular.module('reddimgApp')
  .value('config', {
    reddit: {
      host: '//www.reddit.com',
      params: {
        subreddits: [
          'aww'
        ],
        time: ''
      }
    },
    settings: {
      open: false,
      store: 'reddimg'
    }
  });
