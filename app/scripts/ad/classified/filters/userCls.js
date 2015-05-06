(function () {
    'use strict';
    angular.module('ad.classified')
        .filter('userCls', function (CurrentUserServ) {
            return function (allCls) {
                if (!CurrentUserServ.get()) {
                    var emp = [];
                    return emp;
                }
                return _.filter(allCls, {user: {id: CurrentUserServ.get().id}});
            };
        });
})();
