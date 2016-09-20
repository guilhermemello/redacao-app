(function() {
	'use strict';

	angular
		.module('redacao.camera', [])
		.factory('CameraService', CameraService, [
      '$cordovaCamera',
      '$ionicLoading']);

	function CameraService($cordovaCamera,
		$ionicLoading,
		ModuloService
	  ) {

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
				alert(imageData);
        ModuloService.upload("data:image/jpeg;base64," + imageData);
      }, function(error) {
          console.log('Ocorreu um erro ao tirar ou selecionar a foto: ' + error);
      });
    };
	}
})();
