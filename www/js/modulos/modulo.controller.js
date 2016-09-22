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
			redacaoEnviada: redacaoEnviada,
			redacaoCorrigida: redacaoCorrigida
    });

		(function activate() {
			carregarModulo();
		})();

		function carregarModulo() {
			return ModuloService.getModulo(moduloId).then(function(data) {
				vm.modulo = data.modulo;
			});
		};

    function folhaModelo() {
			window.open(vm.modulo.folha_modelo_url, '_system', 'location=yes');
    }

		function redacaoEnviada() {
			window.open(vm.modulo.redacao_enviada_url, '_system', 'location=yes');
		}

		function redacaoCorrigida() {
			window.open(vm.modulo.redacao_corrigida_url, '_system', 'location=yes');
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

		function exibirComentarios() {
			$state.go('app.comentarios');
		}
	}
})();
