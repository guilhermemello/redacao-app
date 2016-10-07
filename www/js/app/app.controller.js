(function() {
	'use strict';

	angular
		.module('redacao.app', [])
		.controller('AppController', AppController);

	function AppController(User,
		DatabaseService,
    $scope,
		$window) {

		// var a = CacheService.get('current_user');
		//
		// if (a != undefined) {
		// 	$scope.teste = JSON.parse(a);
		// }

			// $scope.teste =  function() { return $window.localStorage['current_user'];}

			// User.localInit()
			// $scope.user = User

			// $scope.user = function() { return JSON.parse(localStorage.getItem('current_user')); };
			// $scope.user = DatabaseService.get();
	};
})();
