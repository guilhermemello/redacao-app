(function () {
	'use strict';

	angular
		.module('redacao.api', [])
		.factory('SituacaoService', SituacaoService);

	function SituacaoService() {
		var service = {
			get: get
		};

		return service;

    var status = [
      { id: 1, color: 'orange', name: 'Aguardando Confirmação do Pagamento' },
      { id: 2, color: 'blue', name: 'Não Iniciado' },
      { id: 3, color: 'green', name: 'Em Andamento' },
      { id: 4, color: 'red', name: 'Encerrado' },
      { id: 5, color: 'gray', name: 'Finalizado' },
      { id: 6, color: 'dark-gray', name: 'Cancelado' }
    ];

    function get(id) {
      return status.filter(function(status) {
        return status.id === id;
      })[0];
    }
  }
})();
