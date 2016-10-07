(function() {
	'use strict';

	angular
		.module('redacao.login')
		.controller('LoginController', LoginController);

	function LoginController($state,
		LoginService,
		DialogService,
		LoadingService) {

    var vm = angular.extend(this, {
			authenticate: authenticate
    });

		function authenticate() {
			LoginService.authenticate(vm.login, vm.password).then(function(data) {
				$state.go('app.modulos', { force: true });
			}).catch(function(response) {
				DialogService.display_error(response.status);
			});
		};
	}
})();
