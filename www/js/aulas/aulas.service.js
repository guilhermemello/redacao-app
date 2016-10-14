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
			get: get,
			marcarComoAssistida: marcarComoAssistida
		};

		return service;

		function get(aulaId, userId, categoriaId) {
			return $http.get('http://localhost:4000/api/v1/' + '/aulas/' + aulaId + '?user_id=' + 557 + "&categoria_id=" + categoriaId).then(function(response) {
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

		function marcarComoAssistida(aulaId, userId, categoriaId) {
			return $http.post('http://localhost:4000/api/v1/' + 'aulas/' + aulaId + '/marcar_como_assistida', { user_id: 557, categoria_id: categoriaId }).then(function(response) {
				return response.data;
			});
		};
	}
})();
