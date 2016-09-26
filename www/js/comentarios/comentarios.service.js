(function() {
	'use strict';

	angular
		.module('redacao.comentarios')
		.factory('ComentarioService', ComentarioService);

	function ComentarioService($http) {
		var comentarios = [];

		var service = {
			getAll: getAll,
      create: create
		};

		return service;

		function getAll() {
			return $http.get('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/comentarios?trabalho_id=577').then(function(response) {
				comentarios = response.data;
				return comentarios;
			});
		};

    function create(trabalhoId, conteudo) {
      $http.post('http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1/comentarios?trabalho_id=577', { trabalho_id: trabalhoId, comentario: { conteudo: conteudo } });
    };
	}
})();
