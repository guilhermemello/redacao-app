(function() {
	'use strict';

	angular
		.module('redacao.aulas', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.aulas', {
					url: '/aulas',
					views: {
						'menuContent': {
							templateUrl: 'js/aulas/categorias.html',
							controller: 'AulasController as vm'
						}
					}
				}).state('app.aula-detalhe', {
					url: '/aula/:categoriaId',
					views: {
						'menuContent': {
							templateUrl: 'js/aulas/aulas.html',
							controller: 'AulaController as vm'
						}
					}
				}).state('app.aula-player', {
					url: '/aula/player/:aulaId',
					views: {
						'menuContent': {
							templateUrl: 'js/aulas/player.html',
							controller: 'PlayerController as vm'
						}
					}
				});
		});
})();
