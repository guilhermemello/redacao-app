(function() {
	'use strict';

	angular
		.module('redacao.trabalhos', [])
		.factory('TrabalhoService', TrabalhoService);

	function TrabalhoService($http) {
		var trabalhos = [];
		// var trabalho = {};

		var service = {
			getByModuloId: getByModuloId,
			get: get
		};

		return service;

		function getByModuloId(moduloId) {
			return $http.get('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/trabalhos/' + moduloId + '/por_modulo').then(function(response) {
				trabalhos = response.data;
				return trabalhos;
			});
		};

		function get(trabalhoId) {
			return $http.get('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/trabalhos/' + trabalhoId).then(function(response) {
				return response.data.trabalho;
			});
		};
	}
})();
