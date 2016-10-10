(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('AulaController', AulaController);

	function AulaController($state) {
		var vm = angular.extend(this, {
			aulas: [],
      assitir: assitir
		});

		(function activate() {
			// carregarModulos();
		})();

		function carregarAulas(categoriaId) {
			return AulaService.porCategoria(categoriaId).then(function(data) {
				return data.aulas
			}).finally(function(){
				// LoadingService.hide();
			});
		};

    function assitir(id) {
      $state.go('app.aula-assistir', {
				id: id
			});
    }
	}
})();
