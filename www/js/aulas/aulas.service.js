(function() {
	'use strict';

	angular
		.module('redacao.aulas')
		.factory('AulaService', AulaService);

	function AulaService($http,
		API_ENDPOINT) {

		var service = {
			porCategoria: porCategoria,
			categorias: categorias,
			get: get
		};

		return service;

		function get(id) {
			console.log(id);
			return $http.get(API_ENDPOINT + '/aulas/' + id).then(function(response) {
				return response.data;
			});
		}

		function categorias() {
			return $http.get(API_ENDPOINT + '/aulas/categorias?user_id=557').then(function(response) {
				return response.data;
			});
		}

		function porCategoria() {
			return $http.get(API_ENDPOINT + '/aulas?user_id=557&categoria_id=1').then(function(response) {
				return response.data;
			});
		};
	}
})();
