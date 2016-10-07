(function () {
	'use strict';

	angular
		.module('redacao.common')
		.factory('DatabaseService', DatabaseService);

	function DatabaseService($cordovaSQLite,
		$ionicPlatform,
		$q) {
		var service = {
			get: get,
      set: set,
			remove: remove
      // init: init
		};

    var db = null;

		return service;

    // function init() {
    //   if (window.cordova && window.SQLitePlugin) {
    //     db = $cordovaSQLite.openDB('usuarios.db', 1);
    //   } else {
    //     db = window.openDatabase('usuarios', '1.0', 'usuarios.db', 100 * 1024 * 1024);
    //   }
		//
		// 	$cordovaSQLite.execute('CREATE TABLE IF NOT EXISTS usuarios (id, access_token, nome, avatar_path)');
    // }

		function get() {
			var query = "SELECT * FROM usuarios ORDER BY rowid DESC LIMIT 1"
			var hash = {};
			var q = $q.defer();

			if (window.cordova && window.SQLitePlugin) {
				db = $cordovaSQLite.openDB('usuarios.db', 1);
			} else {
				db = window.openDatabase('usuarios', '1.0', 'usuarios.db', 100 * 1024 * 1024);
			}

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

    function set(data) {
			if (window.cordova && window.SQLitePlugin) {
				db = $cordovaSQLite.openDB('usuarios.db', 1);
			} else {
				db = window.openDatabase('usuarios', '1.0', 'usuarios.db', 100 * 1024 * 1024);
			}

      var query = "INSERT INTO usuarios (id, access_token, nome, avatar_path) VALUES (?,?,?,?)";
			$cordovaSQLite.execute(db, query, [data.id, data.access_token, data.name, data.avatar_path]);
		};

		function remove(accessToken) {
			if (window.cordova && window.SQLitePlugin) {
				db = $cordovaSQLite.openDB('usuarios.db', 1);
			} else {
				db = window.openDatabase('usuarios', '1.0', 'usuarios.db', 100 * 1024 * 1024);
			}

      var query = "DELETE FROM usuarios WHERE access_token = ?";
			$cordovaSQLite.execute(db, query, [accessToken]);
		};
  }
})();