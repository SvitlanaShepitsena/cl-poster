(function () {
    'use strict';

    angular.module('article')
        .directive('svTopNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-top-news.html',
                scope: {},
                bindToController: {
                    mainNews:'='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {

                    var ctrl = this;



                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
