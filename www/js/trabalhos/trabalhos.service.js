(function() {
	'use strict';

	angular
		.module('redacao.trabalhos', [])
		.factory('TrabalhoService', TrabalhoService);

	function TrabalhoService($http,
		API_ENDPOINT) {
		var service = {
			getAllByModuloId: getAllByModuloId,
			getByTema: getByTema,
			get: get
		};

		return service;

		function getAllByModuloId(moduloId) {
			return $http.get(API_ENDPOINT + '/trabalhos/' + moduloId + '/por_modulo').then(function(response) {
				return response.data;
			});
		};

		function getByTema(moduloId) {
			return $http.get(API_ENDPOINT + '/trabalhos/' + moduloId + '/por_tema').then(function(response) {
				return response.data;
			});
		};

		function get(trabalhoId) {
			return $http.get(API_ENDPOINT + '/trabalhos/' + trabalhoId).then(function(response) {
				return response.data;
			});
		};
	}
})();
