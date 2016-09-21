(function() {
	'use strict';

	angular
		.module('redacao.camera', [])
		.factory('CameraService', CameraService, [
      '$cordovaCamera',
      '$ionicLoading']);

	function CameraService($cordovaCamera,
		$ionicLoading,
		$ionicPopup,
		ModuloService,
		ModalService) {

		var service = {
      capturar: capturar
		};

		return service;

    function capturar(tipo) {
      var source;

      switch (tipo) {
        case 0:
          source = Camera.PictureSourceType.CAMERA;
          break;
        case 1:
          source = Camera.PictureSourceType.PHOTOLIBRARY;
          break;
      }

      var options = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: source,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        ModuloService.upload("data:image/jpeg;base64," + imageData)
					.then(function(response) {
						ModalService.display('RedaçãoPerfeita', 'Redação enviada com sucesso.')
					})
					.catch(function(response) {
  					ModalService.display_error('camera-upload');
					});
      }, function(error) {
          console.log('Ocorreu um erro ao tirar ou selecionar a foto: ' + error);
      });
    };
	}
})();
