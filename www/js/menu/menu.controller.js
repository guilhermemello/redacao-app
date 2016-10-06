(function() {
	'use strict';

	angular
		.module('redacao.menu')
		.controller('MenuController', MenuController);

	function MenuController($state,
		LoginService,
		AccessToken,
		$scope,
		User) {

			$scope.current_user = User.initialize();
		var vm = angular.extend(this, {
			signOut: signOut
		});

		function signOut() {
			LoginService.signOut(AccessToken.current).finally(function() {
				$state.go('app.login');
			});
		}
	}
})();
