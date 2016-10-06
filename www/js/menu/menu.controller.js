(function() {
	'use strict';

	angular
		.module('redacao.menu')
		.controller('MenuController', MenuController);

	function MenuController($state,
		LoginService,
		AccessToken) {
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
