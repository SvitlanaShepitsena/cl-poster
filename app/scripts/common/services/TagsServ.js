(function () {
    'use strict';

    angular.module('common')
        .factory('TagsServ', function ($q, url, users, $firebaseObject, $firebaseArray) {

            return {

                get: function () {

                },

                getAssync: function () {
                    return $q(function (resolve, reject) {

                    });
                }
            };
        });
})();
