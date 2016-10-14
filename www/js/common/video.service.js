(function () {
	'use strict';

	angular
		.module('redacao.common')
		.factory('VideoService', VideoService);

	function VideoService($q,
    $http,
    $sce,
    VIMEO_URL,
    VIMEO_ACCES_TOKEN) {

		var service = {
			load: load,
      configureTrustedVideoUrl: configureTrustedVideoUrl
		};

		return service;

    function load(videoId) {
      var deferred = $q.defer();

      $http.get(VIMEO_URL + '/' + videoId + '?access_token=' + VIMEO_ACCES_TOKEN)
        .then(function (response) {
          deferred.resolve({
            videoUrl: videoUrl(response)
          })
        });

      return deferred.promise;
    };

    function videoUrl(response) {
      return _(response.data.download)
        .findWhere({ quality: 'mobile' })
        .link;
    };

    function configureTrustedVideoUrl(videoUrl) {
      return $sce.trustAsResourceUrl(videoUrl);
    }
  }
})();
