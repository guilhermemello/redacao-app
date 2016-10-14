(function () {
	'use strict';

	angular
		.module('redacao.common')
		.factory('LoadingService', LoadingService);

	function LoadingService($ionicLoading) {
		var service = {
			show: show,
      hide: hide
		};

		return service;

    function show() {
      $ionicLoading.show({
        template: "<div class='spinner'><ion-spinner icon='android'></ion-spinner></div>"
      });
    };

    function hide() {
      $ionicLoading.hide();
    };
  }
})();
