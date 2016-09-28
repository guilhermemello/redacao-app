(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.controller('ModuloController', ModuloController);

	function ModuloController($state,
    $stateParams,
    $ionicPlatform,
    $cordovaCamera,
    $ionicActionSheet,
    $ionicModal,
		$ionicPopup,
		$sce,
		$scope,
    ModuloService,
		TrabalhoService,
    CameraService) {

		$scope.bindHTML = $sce.trustAsHtml;

		var moduloId = $stateParams.moduloId;
    var modulo = {};
		var exibirTema = true;

    var vm = angular.extend(this, {
      modulo: modulo,
			exibirTema: exibirTema,
      carregarModulo: carregarModulo,
      enviarRedacao: enviarRedacao,
      folhaModelo: folhaModelo,
			exibirInformacoes: exibirInformacoes,
			exibirComentarios: exibirComentarios,
			exibirEnvios: exibirEnvios,
			redacaoEnviada: redacaoEnviada,
			redacaoCorrigida: redacaoCorrigida
    });

		(function activate() {
			carregarModulo();
			carregarTrabalho();
		})();

		function carregarModulo() {
			return ModuloService.getModulo(moduloId).then(function(data) {
				vm.modulo = data.modulo;
			});
		};

		function carregarTrabalho() {
			return TrabalhoService.getByTema(moduloId).then(function(data) {
				vm.trabalho = data.trabalho;
			});
		};

    function folhaModelo() {
			window.open(vm.modulo.folha_modelo_url, '_system', 'location=yes');
    }

		function redacaoEnviada() {
			window.open(vm.trabalho.enviada_url, '_system', 'location=yes');
		}

		function redacaoCorrigida() {
			window.open(vm.trabalho.corrigida_url, '_system', 'location=yes');
		}

    function enviarRedacao() {
      $scope.hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: 'Tirar foto' },
          { text: 'Selecionar imagem' }
        ],
        titleText: 'Enviar Redação',
        cancelText: 'Cancelar',
        buttonClicked: function(index) {
          adicionarImagem(index);
        }
      });
    };

    function adicionarImagem(tipo) {
      $scope.hideSheet();

      CameraService.capturar(tipo);
    };

		function exibirInformacoes() {
			$ionicModal.fromTemplateUrl('js/modulos/informacoes.html', {
        animation: 'slide-in-up'
      }).then(function(modal) {
        modal.show();
      });
		};

		function exibirComentarios(trabalhoId) {
			$state.go('app.comentarios', {
				trabalhoId: trabalhoId
			});
		};

		function exibirEnvios(moduloId) {
			$state.go('app.envios', {
				moduloId: moduloId
			});
		};
	}
})();
