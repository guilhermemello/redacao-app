(function() {
	'use strict';

	angular
		.module('redacao.envios')
		.controller('EnviosController', EnviosController);

	function EnviosController($stateParams,
    $state,
    TrabalhoService) {

    var moduloId = $stateParams.moduloId;
    var redacoes = [];

    var vm = angular.extend(this, {
      redacoes: [],
      exibirDetalhes: exibirDetalhes
    });

		(function activate() {
      carregarTrabalhos();
		})();

    function carregarTrabalhos() {
      return TrabalhoService.getByModuloId(moduloId).then(function(data) {
        vm.redacoes = data.trabalhos;
      });
    };

    function exibirDetalhes(trabalhoId) {
      $state.go('app.envios-detalhe', {
        trabalhoId: trabalhoId
      });
    };
	}
})();
