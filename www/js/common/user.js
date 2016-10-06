(function() {
	'use strict';

	angular
		.module('redacao.common')
		.factory('User', User);

	function User(CacheService,
		AccessToken) {
		var service = {
			initialize: initialize
		};

		return service;

		function initialize() {
			var data;

			if (CacheService.get('current_user') != undefined) {
				data = JSON.parse(CacheService.get('current_user'));

				AccessToken.invalid = false
				AccessToken.current = data.access_token
			}

			return data;
		};
	}
})();
