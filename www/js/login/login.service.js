(function() {
	'use strict';

	angular
		.module('redacao.login')
		.factory('LoginService', LoginService);

	function LoginService($http,
		CUSTOMER_ENDPOINT,
		CacheService) {

		var service = {
			authenticate: authenticate,
			localInit: localInit
		};

		return service;

		function authenticate(login, password) {
      var params = {
          user: {
            username: login,
            password: password,
          }
        }

			LoadingService.show();

			return $http.post(CUSTOMER_ENDPOINT + '/sign_in', params).then(function(response) {
				return response.data;
			});
		};

		function localInit() {
			console.log(JSON.parse(CacheService.get('current_user')));
			return JSON.parse(CacheService.get('current_user'));
		};
	}
})();
