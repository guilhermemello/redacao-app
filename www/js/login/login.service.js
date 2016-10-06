(function() {
	'use strict';

	angular
		.module('redacao.login')
		.factory('LoginService', LoginService);

	function LoginService($http,
		CUSTOMER_ENDPOINT,
		LoadingService,
		AccessToken,
		CacheService) {

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

			return $http.post(CUSTOMER_ENDPOINT + '/sign_in', params).then(function(response) {
				return response.data;
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
