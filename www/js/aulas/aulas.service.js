(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.factory('AulaService', AulaService);

	function AulaService($http,
		API_ENDPOINT) {

		var service = {
			porCategoria: porCategoria
		};

		return service;

		function porCategoria() {
			return $http.get(API_ENDPOINT + '/aulas?categoria=557').then(function(response) {
				return response.data;
			});
		};
	}
})();
