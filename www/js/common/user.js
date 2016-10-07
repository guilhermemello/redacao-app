(function() {
	'use strict';

	angular
		.module('redacao.common')
		.factory('User', User);

	function User(AccessToken,
		$q) {
		var service = {
			initialize: initialize,
			localInit: localInit,
			shouldInitFromLocalStorage: shouldInitFromLocalStorage
		};

		return service;

		function shouldInitFromLocalStorage() {
			return !this.logged // && CacheService.get('current_user');
		};

		function localInit() {
			var deferred = $q.defer()

        if (this.shouldInitFromLocalStorage()) {
					console.log('a');
          // this.initialize(CacheService.get('user'))
          deferred.resolve()
        } else {
					console.log('b');
          deferred.reject()
        }

				return deferred.promise
		};

		function initialize(data) {
			_(this).extend(data);

			// CacheService.set('current_user', JSON.stringify(data));
			this.logged = !_(data).isEmpty();

			AccessToken.invalid = false;
			AccessToken.current = data.access_token;
		}
	}
})();
