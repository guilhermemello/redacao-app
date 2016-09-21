(function () {
	'use strict';

	angular
		.module('redacao.api')
		.factory('ModalService', ModalService);

		var data = [
			{ tipo: 'camera', msg: 'Ocorreu um erro ao enviar a redação.' }
		];

	function ModalService($ionicPopup) {
		var service = {
			display_error: display_error
		};

		return service;

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
