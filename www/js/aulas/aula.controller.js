(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('AulaController', AulaController);

	function AulaController($state,
    AulaService) {

		var vm = angular.extend(this, {
			aulas: [],
      carregarAulas: carregarAulas,
      assitir: assitir
		});

		(function activate() {
      carregarAulas(1);
		})();

		function carregarAulas(categoriaId) {
      AulaService.porCategoria(categoriaId).then(function(data) {
        vm.aulas = data.aulas;
			});
		};

    function assitir(aulaId) {
      $state.go('app.aula-player', {
				aulaId: aulaId
			});
    }
	}
})();
