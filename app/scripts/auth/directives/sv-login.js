(function () {
    'use strict';

    angular.module('auth')
        .directive('svLogin', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-login.html',
                scope: {},
                bindToController: {

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
