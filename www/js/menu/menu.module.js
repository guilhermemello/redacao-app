(function() {
	'use strict';

	angular
		.module('redacao.menu', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'js/menu/menu.html',
					controller: 'MenuController as vm'//,
					// resolve: {
					// 	categories: function(menuService) {
					// 		return menuService.getCategoriesMenuItem();
					// 	}
					// }
				});
		});
})();
