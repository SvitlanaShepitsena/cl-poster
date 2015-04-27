(function () {
	'use strict'

	angular.module('app')

		.constant('url', 'https://svet.firebaseio.com/')
		.constant('users', 'https://svet.firebaseio.com/user-management/users/')
		.constant('corporate', 'https://svet.firebaseio.com/events/corporate/')
		.service('urlUsers', function (url) {
			this.url = url + '/user-management/users/';
		})
		.value('weather', 'https://publicdata-weather.firebaseio.com/chicago');

})();
