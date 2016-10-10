(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('AulasController', AulasController);

	function AulasController($state) {

		var vm = angular.extend(this, {
			aulas: [],
			carregarAulasPorCategoria: carregarAulasPorCategoria
		});

		(function activate() {
			// carregarModulos();
			vm.aulas = [1,2,3]
		})();

		function carregarAulas() {
			return AulaService.getModulos().then(function(data) {
				vm.modulos = _(data.modulos).each(function (modulo) { modulo.status = SituacaoService.get(modulo.status.id) })
			}).finally(function(){
				LoadingService.hide();
			});
		};

		function carregarAulasPorCategoria(categoriaId) {
			console.log(categoriaId);
			$state.go('app.aula-detalhe', {
				categoriaId: categoriaId
			});
		};
	}
})();
