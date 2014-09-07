module.exports = function(config) {
  'use strict';

  var bower = require('wiredep')({
    devDependencies: true
  }).js;

  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: ['jasmine'],
    files: bower.concat([
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ]),
    exclude: [],
    port: 8080,
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
    singleRun: true,
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
