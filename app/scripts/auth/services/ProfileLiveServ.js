(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileLiveServ', function (ProfileExtentionServ, $q, url, users, $firebaseObject, $firebaseArray, userAuth) {
            var ref = new Firebase(users);
            var unwatch;
            var userPublicProps = [
                'avatar',
                'email',
                'userName',
                'role',
            ];

            function pickUserProps(user) {
                return _.pick(user, userPublicProps);
            }

            return {
                setBinding: function (userKey) {
                    return $q(function (resolve, reject) {
                        var currentUserProfileRef = $firebaseObject(ref.child(userKey).child('profile'));
                        currentUserProfileRef.$loaded(function () {
                            /*bound when profile is loaded*/
                            userAuth.profile = (currentUserProfileRef);
                            userAuth.key = userKey;
                            unwatch = currentUserProfileRef.$watch(function () {
                                //console.log('changes');
                                /*bound on watch and update profile on any changes*/
                                userAuth.profile = (currentUserProfileRef);
                                //console.log(userAuth.profile);
                            });
                            resolve(true);
                        })
                    });
                },
                unbind: function () {
                    unwatch();
                    userAuth.profile = null;
                    userAuth.key = null;
                }
            };
        });
})();
