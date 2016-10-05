(function() {
	'use strict';

	angular
		.module('redacao.menu')
		.controller('MenuController', MenuController);

	function MenuController(LoginService) {
		var vm = angular.extend(this, {
			current_user: {}
		});

		(function activate() {
			vm.current_user = LoginService.localInit();
		})();
	}
})();
