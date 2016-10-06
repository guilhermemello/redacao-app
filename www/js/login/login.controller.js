(function() {
	'use strict';

	angular
		.module('redacao.login')
		.controller('LoginController', LoginController);

	function LoginController($state,
		LoginService,
		DialogService,
		LoadingService,
		CacheService,
		AccessToken) {

    var vm = angular.extend(this, {
			authenticate: authenticate
    });

		function authenticate() {
			LoginService.authenticate(vm.login, vm.password).then(function(data) {
				CacheService.set('current_user', JSON.stringify(data.user));
			}).catch(function(response) {
				DialogService.display_error(response.status);
			}).finally(function() {
				LoadingService.hide();
				$state.go('app.modulos');
			});
		};
	}
})();
