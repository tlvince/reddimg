'use strict';

/**
 * @ngdoc service
 * @name reddimgApp.reddit
 * @description
 * # reddit
 * Factory in the reddimgApp.
 */
angular.module('reddimgApp')
  .service('reddit', function($resource, config, imgs, route) {
    function resolve(_params) {
      var reddit = $resource(config.reddit.host + '/r/:subreddits/:sorting.json');

      var params = {
        subreddits: config.reddit.params.subreddits.join('+'),
        sorting: route.sorting(),
        t: config.reddit.params.time
      };

      for (var param in _params) {
        params[param] = _params[param];
      }

      return reddit
        .get(params).$promise
        .then(function(res) {
          var imgs = {};
          imgs.after = res.data.after;
          imgs.imgs = res.data.children
            .map(function(child) {
              return child.data;
            })
            .filter(function(img) {
              return img.url.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i);
            })
            .map(function(img) {
              if (img.url.match(/^http:\/\//i)) {
                img.url = img.url.substr(5);
              }
              return img;
            })
            .map(function(img) {
              return {
                permalink: config.reddit.host + img.permalink,
                title: img.title,
                url: img.url
              };
            });
          return imgs;
        });
      }

      this.load = function(params, options) {
        params = params || {};
        return resolve(params).then(function(res) {
          imgs.after = res.after;
          if (options && options.append) {
            imgs.imgs = imgs.imgs.concat(res.imgs);
          } else {
            imgs.imgs = res.imgs;
          }
        });
      };
  });
