(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.controller('PlayerController', PlayerController);

	function PlayerController($state,
    $stateParams,
    AulaService,
    VideoService) {

		var vm = angular.extend(this, {
      aula: {}
		});

    var aulaId = $stateParams.aulaId;

		(function activate() {
      carregarAula(aulaId);
		})();

		function carregarAula(id) {
      AulaService.get(id).then(function(data) {
        vm.aula = data.aula;

        VideoService.load(data.aula.vimeo_id).then(function(data) {
          vm.aula.videoUrl = VideoService.configureTrustedVideoUrl(data.videoUrl);
          vm.videoLoaded = true;
        });
			});
		};
	}
})();
