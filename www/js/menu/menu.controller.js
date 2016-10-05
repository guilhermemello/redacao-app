(function() {
	'use strict';

	angular
		.module('redacao.menu')
		.controller('MenuController', MenuController);

	function MenuController(User) {
		var vm = angular.extend(this, {
			current_user: {}
		});

		(function activate() {
			vm.current_user = User.initialize();
		})();
	}
})();
