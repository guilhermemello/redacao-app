(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('AulasController', AulasController);

	function AulasController($state,
			$scope) {

		var vm = angular.extend(this, {
			aulas: []
		});

		(function activate() {
			// carregarModulos();
		})();

		function carregarAulas() {
			return AulaService.getModulos().then(function(data) {
				vm.modulos = _(data.modulos).each(function (modulo) { modulo.status = SituacaoService.get(modulo.status.id) })
			}).finally(function(){
				LoadingService.hide();
			});
		};
	}
})();
