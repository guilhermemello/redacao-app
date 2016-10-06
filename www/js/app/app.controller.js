(function() {
	'use strict';

	angular
		.module('redacao.app', [])
		.controller('AppController', AppController);

	function AppController(User) {
    var app = this;
     app.current_user = User.initialize();
	}
})();
