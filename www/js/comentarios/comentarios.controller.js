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

    var trabalhoId = $stateParams.trabalhoId;
    var comentario = {};

    var vm = angular.extend(this, {
      comentario: comentario,
      criarComentario: criarComentario,
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

    function criarComentario() {
      ComentarioService.create(trabalhoId, vm.comentario.conteudo);

      carregarComentarios();
    };
	}
})();
