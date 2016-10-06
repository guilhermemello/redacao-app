(function() {
	'use strict';

	angular
		.module('redacao.common')
		.factory('User', User);

	function User(CacheService,
		AccessToken,
		$q) {
		var service = {
			initialize: initialize,
			localInit: localInit
		};

		return service;

		function localInit() {
			// var data;

			var deferred = $q.defer()

			if (CacheService.get('current_user') != undefined) {
				// data = JSON.parse(CacheService.get('current_user'));

				initialize(JSON.parse(CacheService.get('current_user')));
				deferred.resolve()
			}

			// return data;
			return deferred.promise;
		};

		function initialize(data) {
			_(this).extend(data);

			CacheService.set('current_user', JSON.stringify(data));
			// this.logged = !_(data).isEmpty();

			console.log(_(this).name);

			AccessToken.invalid = false;
			AccessToken.current = data.access_token;
		}
	}
})();
