(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedBonus', function ($rootScope, ClassifiedServ) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-bonus.html',
                link: function ($scope, el, attrs) {
                    $scope.$watch('cls', function (newValue, oldValue) {
                        $scope.cls = newValue;
                        $scope.leftToPost = ClassifiedServ.howManyAllowed($scope.cls)
                    });
                    $scope.startCl = function () {
                        if (!ClassifiedServ.isClAvailable($scope.cls)) {
                            $scope.notAllowed = true;
                            $scope.addState = false;
                        } else {
                            $scope.addState = true;
                        }
                    };
                }
            };
        });
})();
