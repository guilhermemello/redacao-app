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
							templateUrl: 'js/aulas/aulas.html',
							controller: 'AulasController as vm'
						}
					}
				});
		});
})();
