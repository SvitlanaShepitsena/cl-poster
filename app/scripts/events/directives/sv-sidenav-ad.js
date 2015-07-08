(function () {
    'use strict';
    angular.module('events')
        .directive('svSidenavAd', function ($mdSidenav) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-sidenav-ad.html',
                scope: {
                    adTitle: '@',
                    adSubhead: '@',
                    adBody: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.closeSideBar = function () {
                        $mdSidenav('left').close();
                        $mdSidenav('right').close();
                    };
                }
            };
        });
})();
