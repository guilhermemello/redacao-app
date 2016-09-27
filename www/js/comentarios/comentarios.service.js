(function() {
	'use strict';

	angular
		.module('redacao.comentarios')
		.factory('ComentarioService', ComentarioService);

	function ComentarioService($http) {
		var comentarios = [];
    var trabalho = {};

		var service = {
			getAll: getAll,
      getTrabalho: getTrabalho,
      create: create
		};

		return service;

		function getAll(trabalhoId) {
			return $http.get('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/comentarios?trabalho_id=' + trabalhoId).then(function(response) {
				comentarios = response.data;
				return comentarios;
			});
		};

    function getTrabalho(trabalhoId) {
			return $http.get('http://localhost:4000/api/v1/trabalhos/' + trabalhoId).then(function(response) {
				trabalho = response.data;
				return trabalho;
			});
		};

    function create(trabalhoId, conteudo) {
      return $http.post('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/comentarios?trabalho_id=577', { trabalho_id: trabalhoId, comentario: { conteudo: conteudo } });
    };
	}
})();
