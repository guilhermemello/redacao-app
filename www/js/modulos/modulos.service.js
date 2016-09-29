(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.factory('ModuloService', ModuloService);

	function ModuloService($http,
		API_ENDPOINT) {
		var service = {
			getModulos: getModulos,
			getModulo: getModulo,
			upload: upload
		};

		return service;

		function getModulos() {
			return $http.get(API_ENDPOINT + '/modulos?aluno_id=557').then(function(response) {
				return response.data;
			});
		};

		function getModulo(id) {
			return $http.get(API_ENDPOINT + '/modulos/' + id).then(function(response) {
				return response.data;
			});
		};

		function upload(data) {
			return $http.post(API_ENDPOINT + '/trabalhos', { trabalho: { redacao_enviada: data } }).then(function(response) {
				return response;
			});
		}
	}
})();
