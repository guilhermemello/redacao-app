(function() {
	'use strict';

	angular
		.module('redacao.common')
		.factory('User', User);

	function User(CacheService,
		AccessToken) {
		var service = {
			initialize: initialize,
			localInit: localInit
		};

		return service;

		function localInit() {
			var data;

			if (CacheService.get('current_user') != undefined) {
				data = JSON.parse(CacheService.get('current_user'));

				AccessToken.invalid = false
				AccessToken.current = data.access_token
			}

			return data;
		};

		function initialize(data) {
			_(this).extend(data);

			CacheService.set('current_user', JSON.stringify(data));
			this.logged = !_(data).isEmpty();

			AccessToken.invalid = false;
			AccessToken.current = data.access_token;
		}
	}
})();
