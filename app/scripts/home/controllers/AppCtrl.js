(function () {
    'use strict';

    angular.module('home')
        .controller('AppCtrl', function (NewsProcessServ, $scope, user, $rootScope, toastr, newsRef) {

            var app = this;
            $rootScope.user = user;


            //var newsRef = ArticleServ.allObjRef();
            newsRef.$bindTo($rootScope, "newsObj").then(function () {
                $rootScope.loaded = true;
            });

            $scope.$watch('newsObj', function (newsObj) {
                if (!newsObj) {
                    return;
                }
                var idCounter = 1;
                var fbKeys = _.slice(_.keys(newsObj),2);

                newsObj = _.map(_.filter(newsObj, function (newsOne, index) {
                    if (_.isObject(newsOne)) {
                        return true;
                    }
                }), function (news,count) {
                   return _.extend(news,{id:idCounter++,
                   fbkey:fbKeys[count]
                   }) ;
                });
                $rootScope.newsList = _.toArray(newsObj);
                var newsTrioGrid = NewsProcessServ.get(newsObj);
                $rootScope.news = newsTrioGrid.trios;
                $rootScope.newsGrid = newsTrioGrid.newsGrid;



            });


            $rootScope.$on('error', function () {
                toastr.error('error');
            })

        });
})();

