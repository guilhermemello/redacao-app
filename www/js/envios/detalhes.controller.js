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
			redacao: {},
      exibirTema: exibirTema,
			exibirComentarios: exibirComentarios,
			exibirRedacaoEnviada: exibirRedacaoEnviada,
			exibirRedacaoCorrigida: exibirRedacaoCorrigida
    });

		(function activate() {
      carregarTrabalho(trabalhoId);
		})();

    function carregarTrabalho(trabalhoId) {
      return TrabalhoService.get(trabalhoId).then(function(data) {
        vm.redacao = data.trabalho;
      });
    };

		function exibirComentarios(trabalhoId) {
			$state.go('app.comentarios', {
				trabalhoId: trabalhoId
			});
		};

		function exibirRedacaoEnviada() {
			window.open(vm.redacao.enviada_url, '_system', 'location=yes');
		}

		function exibirRedacaoCorrigida() {
			window.open(vm.redacao.corrigida_url, '_system', 'location=yes');
		}
	}
})();
