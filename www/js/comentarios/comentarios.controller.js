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
		TrabalhoService,
    CameraService) {

		$scope.bindHTML = $sce.trustAsHtml;

    var trabalhoId = $stateParams.trabalhoId;
    var comentario = {};
    var trabalho = {};

    var vm = angular.extend(this, {
      comentario: comentario,
      trabalho: trabalho,
      criarComentario: criarComentario,
      comentarios: []
    });

		(function activate() {
      carregarTrabalho();
			carregarComentarios();
		})();

		function carregarComentarios() {
			return ComentarioService.getAll(trabalhoId).then(function(data) {
				vm.comentarios = data.comentarios;
			});
		};

    function carregarTrabalho() {
			return TrabalhoService.get(trabalhoId).then(function(data) {
        vm.trabalho = data.trabalho;
      });
    }

    function criarComentario() {
      ComentarioService.create(trabalhoId, vm.comentario.conteudo).then(function(data) {
        carregarComentarios();
				carregarTrabalho();
      });

      vm.comentario.conteudo = '';
    };
	}
})();
