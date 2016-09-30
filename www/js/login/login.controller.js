(function() {
	'use strict';

	angular
		.module('redacao.login')
		.controller('LoginController', LoginController);

	function LoginController($state,
    $stateParams) {

    var vm = angular.extend(this, {
    });

		(function activate() {
		})();

		// function carregarModulo() {
		// 	return ModuloService.getModulo(moduloId).then(function(data) {
		// 		vm.modulo = data.modulo;
		// 	});
		// };
	}
})();
