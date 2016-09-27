(function() {
	'use strict';

	angular
		.module('redacao.envios', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.envios', {
					url: '/envios/:moduloId',
					views: {
						'menuContent': {
							templateUrl: 'js/envios/envios.html',
							controller: 'EnviosController as vm'
						}
					}
				})
        .state('app.envios-detalhe', {
					url: '/envios_detalhe/:trabalhoId',
					views: {
						'menuContent': {
							templateUrl: 'js/envios/detalhes.html',
							controller: 'DetalhesController as vm'
						}
					}
				});
		});
})();
