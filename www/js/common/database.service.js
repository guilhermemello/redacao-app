(function () {
	'use strict';

	angular
		.module('redacao.common')
		.factory('DatabaseService', DatabaseService);

	function DatabaseService($cordovaSQLite,
		$q) {

		var service = {
			get: get,
      save: save,
			remove: remove
      // init: init
		};

		return service;

    // function init() {
    //   if (window.cordova && window.SQLitePlugin) {
    //     db = $cordovaSQLite.openDB('redacao.db', 1);
    //   } else {
    //     db = window.openDatabase('redacao', '1.0', 'redacao.db', 100 * 1024 * 1024);
    //   }
		//
		// 	$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS usuarios (id, access_token, nome, avatar_path)');
    // }

		function get() {
			var query = "SELECT * FROM usuarios ORDER BY rowid DESC LIMIT 1"
			var hash = {};
			var q = $q.defer();

			$ionicPlatform.ready(function() {
				if (window.cordova && window.SQLitePlugin) {
					db = $cordovaSQLite.openDB('redacao.db', 1);
				} else {
					db = window.openDatabase('redacao', '1.0', 'redacao.db', 100 * 1024 * 1024);
				}
			});

      $cordovaSQLite.execute(db, query).then(function(response) {
				if (response.rows.length > 0) {
					for (var i = 0; i < response.rows.length; i++){
						hash = response.rows.item(i);
					}

					q.resolve(hash);
				}
			});

			return q.promise;
		};

    function save(data) {
      var query = "INSERT INTO usuarios (id, access_token, nome, avatar_path) VALUES (?,?,?,?)";
			// $cordovaSQLite.execute(db, query, [data.id, data.access_token, data.name, data.avatar_path]);
		};

		function remove(accessToken) {
			var query = "DELETE FROM usuarios WHERE access_token = ?";
			// $cordovaSQLite.execute(db, query, [accessToken]);
		};
  }
})();
