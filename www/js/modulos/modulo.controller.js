(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.controller('ModuloController', ModuloController);

	function ModuloController($state,
    $stateParams,
    $scope,
    $ionicPlatform,
    $cordovaCamera,
    $ionicActionSheet,
    $ionicModal,
		$sce,
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
			exibirInformacoes: exibirInformacoes
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

    function enviarRedacao() {
      $scope.hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: 'Tirar foto' },
          { text: 'Selecionar imagem' }
        ],
        titleText: 'Enviar Redação',
        cancelText: 'Cancelar',
        buttonClicked: function(index) {
          addImage(index);
        }
      });
    };

    function addImage(type) {
      $scope.hideSheet();

      CameraService.capturar(type);
    };

		function exibirInformacoes() {
			$ionicModal.fromTemplateUrl('js/modulos/informacoes.html', {
        animation: 'slide-in-up'
      }).then(function(modal) {
        modal.show();
      });
		}
	}
})();
