(function () {
    'use strict';

    angular.module('sections.demographics')
        .directive('svDemographicsMap', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/demographics/directives/sv-demographics-map.html',
                scope: {
                    modalMethod: '&',
                    linkName: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
