(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('AulaController', AulaController);

	function AulaController($state,
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
			console.log(aula);

			if (aula.situacao == 1) {

			} else {
      	$state.go('app.aula-player', {
					aulaId: aula.id,
					categoriaId: categoriaId
				});
			}
    }
	}
})();
