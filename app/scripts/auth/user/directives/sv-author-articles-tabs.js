(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthorArticlesTabs', function (userAuth, ArticlesServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-author-articles-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    //$scope.sectionName = $stateParams.sectionName;
                    $scope.selectedIndex = 0;
                    $scope.user = userAuth.profile;
                    var articles = ArticlesServ.all();
                    articles.$loaded().then(function () {
                        $scope.articles = articles;
                        articles.$watch(function () {
                            $scope.articles = articles;
                        })
                    })
                }
            };
        });
})();
