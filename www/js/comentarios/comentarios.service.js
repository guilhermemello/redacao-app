(function() {
	'use strict';

	angular
		.module('redacao.comentarios')
		.factory('ComentarioService', ComentarioService);

	function ComentarioService($http,
		API_ENDPOINT) {

		var service = {
			getAll: getAll,
      getTrabalho: getTrabalho,
      create: create
		};

		return service;

		function getAll(trabalhoId) {
			return $http.get(API_ENDPOINT + '/comentarios?trabalho_id=' + trabalhoId).then(function(response) {
				return response.data;
			});
		};

    function getTrabalho(trabalhoId) {
			return $http.get(API_ENDPOINT+ '/trabalhos/' + trabalhoId).then(function(response) {
				return response.data;
			});
		};

    function create(trabalhoId, conteudo) {
      return $http.post(API_ENDPOINT + '/comentarios?trabalho_id=577', { trabalho_id: trabalhoId, comentario: { conteudo: conteudo } });
    };
	}
})();
