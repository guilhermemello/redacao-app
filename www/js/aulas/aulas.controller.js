(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('AulasController', AulasController);

	function AulasController($state,
		$stateParams,
    AulaService) {

		var categoriaId = $stateParams.categoriaId;

		var vm = angular.extend(this, {
			aulas: [],
      carregarAulas: carregarAulas,
      assitir: assitir
		});

		(function activate() {
      carregarAulas(categoriaId);
		})();

		function carregarAulas(categoriaId) {
      AulaService.porCategoria(categoriaId).then(function(data) {
        vm.aulas = data.aulas;
			});
		};

    function assitir(aula) {
			if (aula.situacao != 1) {
      	$state.go('app.aula-player', {
					aulaId: aula.id,
					categoriaId: categoriaId
				});
			}
    }
	}
})();
