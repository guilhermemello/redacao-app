(function() {
	'use strict';

	angular
		.module('redacao.envios')
		.controller('DetalhesController', DetalhesController);

	function DetalhesController($stateParams,
    $state,
    $scope,
    $sce,
    TrabalhoService) {

    $scope.bindHTML = $sce.trustAsHtml;

    var trabalhoId = $stateParams.trabalhoId;
    var exibirTema = true;

    var vm = angular.extend(this, {
      exibirTema: exibirTema
    });

		(function activate() {
      carregarTrabalho(trabalhoId);
		})();

    function carregarTrabalho(trabalhoId) {
      return TrabalhoService.get(trabalhoId).then(function(data) {
        vm.redacao = data;
      });
    };
	}
})();
