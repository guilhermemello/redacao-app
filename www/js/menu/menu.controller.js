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
				// console.log("====>>>> " + JSON.stringify(response));
				$scope.current_user = response;
			});
		})();

		function signOut() {
			DatabaseService.get().then(function(response) {
				console.log(response);
				LoginService.signOut(response.access_token).then(function() {
					console.log('aaaa');
					$state.go('app.login', { force: true });
				});
			});
		}
	}
})();
