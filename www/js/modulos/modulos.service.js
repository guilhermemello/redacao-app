(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.factory('ModuloService', ModuloService);

	function ModuloService($http) {
		var modulos = [];
		var modulo = {};

		var service = {
			getModulos: getModulos,
			getModulo: getModulo,
			upload: upload
		};

		return service;

		function getModulos() {
			return $http.get('http://http://api-hmg.us-east-1.elasticbeanstalk.com//api/v1/modulos?aluno_id=557').then(function(response) {
				modulos = response.data;
				return modulos;
			});
		};

		function getModulo(id) {
			return $http.get('http://http://api-hmg.us-east-1.elasticbeanstalk.com//api/v1/modulos/' + id).then(function(response) {
				modulo = response.data;
				return modulo;
			});
		};

		function upload(data) {
			return $http.post('http://http://api-hmg.us-east-1.elasticbeanstalk.com//api/v1/trabalhos', { trabalho: { redacao_enviada: data } }).then(function(response) {
				return response;
			});
		}
	}
})();
