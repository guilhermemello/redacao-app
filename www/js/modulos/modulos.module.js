(function() {
	'use strict';

	angular
		.module('redacao.modulos', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.modulos', {
					url: '/modulos',
					views: {
						'menuContent': {
							templateUrl: 'js/modulos/modulos.html',
							controller: 'ModulosController as vm'
						}
					}
				})
				.state('app.modulo-detalhe', {
					url: '/modulos/:moduloId',
					views: {
						'menuContent': {
							templateUrl: 'js/modulos/modulo.html',
							controller: 'ModuloController as vm'
						}
					}
				})
		});
})();
