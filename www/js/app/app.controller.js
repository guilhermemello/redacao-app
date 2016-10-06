(function() {
	'use strict';

	angular
		.module('redacao.app', [])
		.controller('AppController', AppController);

	function AppController(User,
    $scope,
		CacheService) {

		var a = CacheService.get('current_user');

		if (a != undefined) {
			$scope.teste = JSON.parse(a);
		}
	};
})();
