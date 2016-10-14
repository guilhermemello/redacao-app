(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('PlayerController', PlayerController);

	function PlayerController($state,
    $stateParams,
    AulaService,
    VideoService,
		LoadingService) {

		var vm = angular.extend(this, {
      aula: {},
			categoriaId: categoriaId,
			marcarComoAssistida: marcarComoAssistida
		});

    var aulaId = $stateParams.aulaId;
		var categoriaId = $stateParams.categoriaId;

		(function activate() {
      carregarAula(aulaId);
		})();

		function carregarAula(aulaId) {
			LoadingService.show();

      AulaService.get(aulaId, '', categoriaId).then(function(data) {
        vm.aula = data.aula;

        VideoService.load(data.aula.vimeo_id).then(function(data) {
          vm.aula.videoUrl = VideoService.configureTrustedVideoUrl(data.videoUrl);
          vm.videoLoaded = true;

					LoadingService.hide();
        });
			});
		};

		function marcarComoAssistida(aulaId, userId) {
			LoadingService.show();

			AulaService.marcarComoAssistida(aulaId, userId, categoriaId).then(function(response) {
				$state.go('app.aula-player', {
					categoriaId: categoriaId,
					aulaId: response.aula.id
				});

				LoadingService.hide();
			});
		};
	}
})();
