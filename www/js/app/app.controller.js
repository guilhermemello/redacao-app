(function() {
	'use strict';

	angular
		.module('redacao.app', [])
		.controller('AppController', AppController);

	function AppController(User, $scope) {
    $scope.current_user = User.initialize();
	};
})();
