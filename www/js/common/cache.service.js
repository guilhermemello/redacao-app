(function () {
	'use strict';

	angular
		.module('redacao.common', [])
		.factory('CacheService', CacheService);

	function CacheService($window) {
		var service = {
			get: get,
      set: set,
			remove: remove
		};

		return service;

		function get(key) {
      return $window.localStorage[key];
		};

    function set(key, value) {
      $window.localStorage[key] = value;
		};

		function remove(key) {
			$window.localStorage.removeItem(key);
		};
  }
})();
