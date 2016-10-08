(function() {
	'use strict';

	angular
		.module('redacao.login')
		.factory('LoginService', LoginService);

	function LoginService($http,
		CUSTOMER_ENDPOINT,
		LoadingService,
		DatabaseService) {

		var service = {
			authenticate: authenticate,
			signOut: signOut
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

			return $http.post(CUSTOMER_ENDPOINT + '/sign_in', params)
				.success(function(response) {
					DatabaseService.save(response.user);
				}).finally(function() {
					LoadingService.hide();
				});
		};

		function signOut(accessToken) {
			return $http.delete(CUSTOMER_ENDPOINT + '/sign_out?user[access_token]=' + accessToken)
				.success(function() {
					DatabaseService.remove(accessToken);
				});
		};
	}
})();
