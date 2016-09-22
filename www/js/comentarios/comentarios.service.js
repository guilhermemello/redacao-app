(function() {
	'use strict';

	angular
		.module('redacao.comentarios')
		.factory('ComentarioService', ComentarioService);

	function ComentarioService($http) {
		var comentarios = [];

		var service = {
			getAll: getAll
		};

		return service;

		function getAll() {
			return $http.get('http://localhost:4000/api/v1/comentarios?trabalho_id=577').then(function(response) {
				comentarios = response.data;
				return comentarios;
			});
		};
	}
})();
