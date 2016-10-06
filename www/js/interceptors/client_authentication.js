(function() {
	'use strict';

	angular
		.module('redacao.interceptors', [])
		.factory('ClientAuthenticationInterceptor', ClientAuthenticationInterceptor);

	function ClientAuthenticationInterceptor(AccessToken,
    User,
    AUTH_CLIENT_ID,
    AUTH_SECRET,
    AUTH_EXPIRES_IN) {

    function sign(expiration) {
      var id = AUTH_CLIENT_ID,
          secret = AUTH_SECRET

      var shaObj = new jsSHA("SHA-1", "TEXT");
      shaObj.update(id + secret + expiration);

      return shaObj.getHash('HEX');
    };

    function calculateExpiration() {
      return Math.round(Date.now()/1000) + parseInt(AUTH_EXPIRES_IN, 10);
    }

    function configureAcessToken(url) {
      return URI(url).addSearch('user[access_token]', AccessToken.current).toString()
    }

    function shouldConfigureClientAuthentication(url) {
      return url && !url.match(/vimeo\.com/)
    }

    return {
      request: function (config) {
        var expiration;

        if (shouldConfigureClientAuthentication(config.url)) {
          expiration = calculateExpiration();

          config.headers['Auth-Id'] = AUTH_CLIENT_ID
          config.headers['Auth-Hash'] = sign(expiration)
          config.headers['Auth-Expiration'] = expiration
        }

        if (AccessToken.current) {
          config.url = configureAcessToken(config.url);
        }

        return config
      }
		}
	}
})();
