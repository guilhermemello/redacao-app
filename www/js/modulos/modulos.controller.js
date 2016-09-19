(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.controller('ModulosController', ModulosController);

	function ModulosController($state,
			$scope,
			SituacaoService,
			DataService) {

		var vm = angular.extend(this, {
			modulos: [],
			exibirDetalheModulo: exibirDetalheModulo
		});

		(function activate() {
			carregarModulos();
		})();

		function carregarModulos() {
			// return DataService.getModulos().then(function(data) {
			// 	vm.modulos = _(data.modulos).each(function (a) { a.status = SituacaoService.get(a.id) })
			// 	console.log(vm.modulos);
			// });
		};

		function exibirDetalheModulo(moduloId) {
			$state.go('app.modulo-detalhe', {
				moduloId: moduloId
			});
		}
	}
})();
