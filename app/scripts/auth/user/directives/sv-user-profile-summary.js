(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserProfileSummary', function (UserGroupsServ, CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-profile-summary.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;
                    },true);
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);
                    };
                }
            };
        });
})();