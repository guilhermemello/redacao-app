(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.controller('ModulosController', ModulosController, ['DataService']);

	function ModulosController($state, $scope, DataService) {
		var vm = angular.extend(this, {
			modulos: [],
			exibirDetalheModulo: exibirDetalheModulo
		});

		(function activate() {
			carregarModulos();
		})();

		function carregarModulos() {
			return DataService.getModulos().then(function(data) {
				vm.modulos = data.modulos;
			});
		};

		function exibirDetalheModulo(moduloId) {
			$state.go('app.modulo-detalhe', {
				moduloId: moduloId
			});
		}
	}
})();
