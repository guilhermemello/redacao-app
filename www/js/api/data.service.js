(function () {
	'use strict';

	angular
		.module('redacao.api', [])
		.factory('DataService', DataService);

	function DataService($http) {
		var modulos = [];
		var modulo = {};

		var service = {
			getModulos: getModulos,
			getModulo: getModulo
		};

		return service;

		function getModulos() {
			return $http.get('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/modulos?aluno_id=557').then(function(response) {
				modulos = response.data;
				return modulos;
			});
		};

		function getModulo(id) {
			return $http.get('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/modulos/' + id).then(function(response) {
				modulo = response.data;
				return modulo;
			});
		};
  }
})();
