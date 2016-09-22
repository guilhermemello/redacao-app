(function() {
	'use strict';

	angular
		.module('redacao.comentarios')
		.controller('ComentariosController', ComentariosController);

	function ComentariosController($state,
    $stateParams,
    $ionicPlatform,
    $cordovaCamera,
    $ionicActionSheet,
    $ionicModal,
		$ionicPopup,
		$sce,
		$scope,
    ComentarioService,
    CameraService) {

		$scope.bindHTML = $sce.trustAsHtml;

    var vm = angular.extend(this, {
      comentarios: []
    });

		(function activate() {
			carregarComentarios();
		})();

		function carregarComentarios() {
			return ComentarioService.getAll().then(function(data) {
        console.log(data);
				vm.comentarios = data.comentarios;
			});
		};
	}
})();
