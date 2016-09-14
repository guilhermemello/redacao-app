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
    $cordovaFileOpener2,
    DataService,
    CameraService) {

		var moduloId = $stateParams.moduloId;
    var modulo = {};

    var vm = angular.extend(this, {
      modulo: modulo,
      carregarModulo: carregarModulo,
      enviarRedacao: enviarRedacao,
      folhaModelo: folhaModelo
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
      $cordovaFileOpener2.open(
        'https://redacaoperfeita.s3.amazonaws.com/folhas_modelo/enem.pdf',
        'application/pdf'
      ).then(function() {
        // file opened successfully
      }, function(err) {
        // An error occurred. Show a message to the user
      });
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
	}
})();
