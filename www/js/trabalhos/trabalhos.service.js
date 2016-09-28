(function() {
	'use strict';

	angular
		.module('redacao.trabalhos', [])
		.factory('TrabalhoService', TrabalhoService);

	function TrabalhoService($http) {
		var service = {
			getAllByModuloId: getAllByModuloId,
			getByTema: getByTema,
			get: get
		};

		return service;

		function getAllByModuloId(moduloId) {
			return $http.get('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/trabalhos/' + moduloId + '/por_modulo').then(function(response) {
				return response.data;
			});
		};

		function getByTema(moduloId) {
			return $http.get('http://localhost:4000/api/v1/trabalhos/' + moduloId + '/por_tema').then(function(response) {
				return response.data;
			});
		};

		function get(trabalhoId) {
			return $http.get('http://localhost:4000/api/v1/trabalhos/' + trabalhoId).then(function(response) {
				return response.data;
			});
		};
	}
})();
