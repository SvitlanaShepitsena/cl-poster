(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svHomeAd', function (AdServ, $timeout) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-home-ad.html',
                scope: {
                    place: '@'
                },
                link: function ($scope, el, attrs) {

                    $scope.adIndex = 0;
                    AdServ.allArrShuffled().then(function (ads) {
                        $scope.ads = ads;
                        $scope.currentAd = $scope.ads[$scope.adIndex].banner;

                        AdServ.increaseShow($scope.ads[$scope.adIndex].$id);
                    });

                    var index;
                    $scope.showPrevAd = function () {
                        index = $scope.adIndex;
                        index--;
                        index = index < 0 ? $scope.ads.length - 1 : index;
                        $scope.adIndex = index;

                        $timeout(function () {
                            $scope.currentAd= $scope.ads[$scope.adIndex].banner;
                        },700);


                        AdServ.increaseShow($scope.ads[$scope.adIndex].$id);
                    };
                    $scope.showNextAd = function () {
                        index = $scope.adIndex;
                        index++;
                        index = index === $scope.ads.length ? 0 : index;
                        $scope.adIndex = index;

                        $timeout(function () {
                            $scope.currentAd= $scope.ads[$scope.adIndex].banner ;
                        },700);
                        AdServ.increaseShow($scope.ads[$scope.adIndex].$id);
                    };
                }
            };
        });
})();
