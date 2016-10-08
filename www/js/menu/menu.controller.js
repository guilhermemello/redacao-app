(function() {
	'use strict';

	angular
		.module('redacao.menu')
		.controller('MenuController', MenuController);

	function MenuController($state,
		DatabaseService,
		LoginService,
		AccessToken,
		$scope) {

		var vm = angular.extend(this, {
			signOut: signOut
		});

		(function activate() {
			DatabaseService.get().then(function(response) {
				console.log(response);
				$scope.current_user = response;
			});
		})();

		function signOut() {
			DatabaseService.get().then(function(response) {
				LoginService.signOut(response.access_token).then(function() {
					$state.go('app.login', { force: true });
				});
			});
		}
	}
})();
