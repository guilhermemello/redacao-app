(function() {
	'use strict';

	angular
		.module('redacao.menu')
		.controller('MenuController', MenuController);

	function MenuController($state,
		DatabaseService,
		LoginService,
		AccessToken,
		$scope) {

		var vm = angular.extend(this, {
			signOut: signOut
		});

		(function activate() {
			DatabaseService.get().then(function(response) {
				// console.log("====>>>> " + JSON.stringify(response));
				$scope.current_user = response;
			});
		})();

		function signOut() {
			console.log("access_token ==> " + $scope.current_user.access_token);
			LoginService.signOut($scope.current_user.access_token).finally(function() {
				$state.go('app.login');
			});
		}
	}
})();
