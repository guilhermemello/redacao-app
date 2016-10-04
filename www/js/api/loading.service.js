(function () {
	'use strict';

	angular
		.module('redacao.api')
		.factory('LoadingService', LoadingService);

	function LoadingService($ionicLoading) {
		var service = {
			show: show,
      hide: hide
		};

		return service;

    function show() {
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
      });
    };

    function hide() {
      $ionicLoading.hide();
    };
  }
})();
