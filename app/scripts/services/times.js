'use strict';

/**
 * @ngdoc service
 * @name reddimgApp.times
 * @description
 * # times
 * Constant in the reddimgApp.
 */
angular.module('reddimgApp')
  .constant('times', [
    {
      id: 'hour',
      label: 'This hour'
    },
    {
      id: 'day',
      label: 'Today'
    },
    {
      id: 'week',
      label: 'This week'
    },
    {
      id: 'month',
      label: 'This month'
    },
    {
      id: 'year',
      label: 'This year'
    },
    {
      id: 'all',
      label: 'All time'
    }
  ]);
