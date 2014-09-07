'use strict';

/**
 * @ngdoc service
 * @name reddimgApp.nav
 * @description
 * # nav
 * Factory in the reddimgApp.
 */
angular.module('reddimgApp')
  .constant('nav', [
    {
      id: 'hot',
      label: 'Hot'
    },
    {
      id: 'new',
      label: 'New',
    },
    {
      id: 'controversial',
      label: 'Controversial'
    },
    {
      id: 'top',
      label: 'Top'
    }
  ]);
