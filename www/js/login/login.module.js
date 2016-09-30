(function() {
	'use strict';

	angular
		.module('redacao.login', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.login', {
					url: '/login',
          views: {
						'menuContent': {
							templateUrl: 'js/login/login.html',
							controller: 'LoginController as vm'
						}
					}
				});
		});
})();
