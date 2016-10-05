(function () {
	'use strict';

	angular
		.module('redacao.api')
		.factory('CacheService', CacheService);

	function CacheService($window) {
		var service = {
			get: get,
      set: set
		};

		return service;

		function get(key) {
      return $window.localStorage[key];
		}

    function set(key, value) {
      $window.localStorage[key] = value;
		}
  }
})();
