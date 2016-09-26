(function() {
	'use strict';

	angular
		.module('redacao.comentarios', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.comentarios', {
					url: '/comentarios/:trabalhoId',
					views: {
						'menuContent': {
							templateUrl: 'js/comentarios/comentarios.html',
							controller: 'ComentariosController as vm'
						}
					}
				});
		});
})();
