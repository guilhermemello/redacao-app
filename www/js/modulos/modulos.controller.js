(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.controller('ModulosController', ModulosController);

	function ModulosController($state,
			$scope,
			DataService,
			SituacaoService) {

		var vm = angular.extend(this, {
			modulos: [],
			exibirDetalheModulo: exibirDetalheModulo
		});

		(function activate() {
			carregarModulos();
		})();

		function carregarModulos() {
			console.log(SituacaoService)
			return DataService.getModulos().then(function(data) {
				vm.modulos = _(data.modulos).each(function (modulo) { modulo.status = SituacaoService.get(modulo.status.id) })
				console.log(data);
				// vm.modulos = data.modulos;
			});
		};

		function exibirDetalheModulo(moduloId) {
			$state.go('app.modulo-detalhe', {
				moduloId: moduloId
			});
		}
	}
})();
