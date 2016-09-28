(function () {
	'use strict';

	angular
		.module('redacao.api', [])
		.factory('SituacaoService', SituacaoService);

  var status = [
    { id: 1, cor: 'cinza', nome: 'Aguardando Confirmação do Pagamento' },
    { id: 2, cor: 'azul', nome: 'Não Iniciado' },
    { id: 3, cor: 'verde', nome: 'Em Andamento' },
    { id: 4, cor: 'laranja', nome: 'Encerrado' },
    { id: 5, cor: 'vermelho', nome: 'Finalizado' },
    { id: 6, cor: 'vermelho', nome: 'Cancelado' }
  ];

	function SituacaoService() {
		var service = {
			get: get
		};

		return service;

    function get(id) {
      return status.filter(function(status) {
        return status.id === id;
      })[0];
    }
  }
})();
