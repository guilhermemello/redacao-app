(function() {
	'use strict';

	angular
		.module('redacao.menu')
		.controller('MenuController', MenuController);

	function MenuController($state,
		User,
		LoginService) {
		var vm = angular.extend(this, {
			current_user: {},
			signOut: signOut
		});

		(function activate() {
			vm.current_user = User.initialize();
		})();

		function signOut() {
			LoginService.signOut(vm.current_user.access_token).success(function(response) {
					console.log(response);
				}).finally(function() {
					$state.go('app.login');
				});
		}
	}
})();
