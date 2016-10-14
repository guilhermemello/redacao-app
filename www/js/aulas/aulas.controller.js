(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('AulasController', AulasController);

	function AulasController($state,
		AulaService) {

		var vm = angular.extend(this, {
			categorias: [],
			carregarAulasPorCategoria: carregarAulasPorCategoria
		});

		(function activate() {
			carregarCategorias();
		})();

		function carregarCategorias() {
			return AulaService.categorias().then(function(data) {
				vm.categorias = data.categorias
			});
		}

		function carregarAulasPorCategoria(categoriaId) {
			$state.go('app.aula-detalhe', {
				categoriaId: categoriaId
			});
		};
	}
})();
