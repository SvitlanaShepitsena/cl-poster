(function () {
    'use strict';
    angular.module('home')
        .directive('svSocialTopNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-social-top-nav.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();