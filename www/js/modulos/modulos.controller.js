(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.controller('ModulosController', ModulosController);

	function ModulosController($state,
			$scope,
			ModuloService,
			SituacaoService) {

		var vm = angular.extend(this, {
			modulos: [],
			exibirDetalheModulo: exibirDetalheModulo
		});

		(function activate() {
			carregarModulos();
		})();

		function carregarModulos() {
			return ModuloService.getModulos().then(function(data) {
				vm.modulos = _(data.modulos).each(function (modulo) { modulo.status = SituacaoService.get(modulo.status.id) })
			});
		};

		function exibirDetalheModulo(moduloId) {
			$state.go('app.modulo-detalhe', {
				moduloId: moduloId
			});
		};
	}
})();
