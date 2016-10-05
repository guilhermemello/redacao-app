(function() {
	'use strict';

	angular
		.module('redacao.common')
		.factory('User', User);

	function User(CacheService) {
		var service = {
			initialize: initialize
		};

		return service;

		function initialize() {
			// console.log(JSON.parse(CacheService.get('current_user')));
			return JSON.parse(CacheService.get('current_user'));
		};
	}
})();
