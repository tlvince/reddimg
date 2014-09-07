'use strict';

/**
 * @ngdoc directive
 * @name reddimgApp.directive:infiniteScroll
 * @description
 * # infiniteScroll
 */
angular.module('reddimgApp')
  .directive('infiniteScroll', function($window, $document) {
    return {
      scope: {
        canLoad: '=',
        infiniteScroll: '='
      },
      link: function(scope, element, attrs) {
        var offset = parseInt(attrs.threshold, 10) || 0;
        var e = $document.find('body')[0];
        $document.bind('scroll', function () {
          if (scope.canLoad && $window.innerHeight + $window.scrollY >= e.offsetHeight - offset) {
            scope.infiniteScroll();
          }
        });
      }
    };
  });
