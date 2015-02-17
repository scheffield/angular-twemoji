/**
 * angular-twemoji
 * @version v0.0.7 - 2015-02-17
 * @link https://github.com/scheffield/angular-twemoji
 * @author  <scheffield@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('sc.twemoji', [])
  .provider('twemoji', function () {
    var self = this;

    var findToParse = function (toParse) {
      if (angular.isElement(toParse)) {
        return toParse[0];
      }

      return toParse;
    };

    self.setOptions = function (opts) {
      this.opts = opts;
    };

    self.$get = ['$window', function ($window) {

      return function parse(toParse) {
        return $window.twemoji.parse(findToParse(toParse), self.opts);
      };
    }];
  })
  .directive('twemoji', ['twemoji', function (twemoji) {
    return {
      restrict: 'EA',
      replace: true,
      link: function (scope, elem) {
        twemoji(elem);
      }
    };
  }])
  .filter('twemoji', ['twemoji', function (twemoji) {
    return function (toParse) {
      return twemoji(toParse);
    };
  }])
;
