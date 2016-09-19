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
    DataService,
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
			return DataService.getModulo(moduloId).then(function(data) {
				vm.modulo = data.modulo;
			});
		};

    function folhaModelo() {
      // $ionicModal.fromTemplateUrl('js/modulos/folha-modelo.html', {
      //   // scope: $scope,
      //   animation: 'slide-in-up'
      // }).then(function(modal) {
      //   // $scope.modal = modal;
      //   modal.show();
      // });
      // $cordovaFileOpener2.open(
      //   'https://redacaoperfeita.s3.amazonaws.com/folhas_modelo/enem.pdf',
      //   'application/pdf'
      // ).then(function() {
      //   // file opened successfully
      // }, function(err) {
      //   // An error occurred. Show a message to the user
      // });

			window.open('http://redacaoperfeita.s3.amazonaws.com/redacoes/3285/enviada/juniormussel.pdf', '_blank', 'location=yes');
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
