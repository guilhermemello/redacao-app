(function () {
	'use strict';

	angular
		.module('redacao.common')
		.factory('DialogService', DialogService);

		var data = [
			{ tipo: 'camera-upload', msg: 'Ocorreu um erro ao enviar a redação.' },
			{ tipo: 401, msg: 'O email ou a senha inseridos não são válidos.' }
		];

	function DialogService($ionicPopup) {
		var service = {
			display: display,
			display_error: display_error
		};

		return service;

		function display(title, msg) {
			$ionicPopup.alert({
				title: title,
				content: msg
			});
		}

		function display_error(tipo) {
			$ionicPopup.alert({
				title: 'Atenção',
				content: get(tipo).msg
			});
		};

    function get(tipo) {
      return data.filter(function(error) {
        return error.tipo === tipo;
      })[0];
    };
  }
})();
