(function() {
	'use strict';

	angular
		.module('redacao.login')
		.factory('LoginService', LoginService);

	function LoginService($http,
		CUSTOMER_ENDPOINT,
		LoadingService,
		AccessToken,
		CacheService,
		User) {

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
					User.initialize(response.user);
				}).error(function(response) {

				}).finally(function() {
					LoadingService.hide();
				});
		};

		function signOut(access_token) {
			var params = {
				user : {
					access_token: access_token
				}
			}

			return $http.delete(CUSTOMER_ENDPOINT + '/sign_out?user[access_token]=' + access_token).success(function() {
				CacheService.remove('current_user');
				clearAccessToken();
			});
		};

		function clearAccessToken() {
			AccessToken.current = '';
		};
	}
})();
