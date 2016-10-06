angular.module('redacao', [
  'ionic',
  'ionic.native',
  'redacao.app',
  'redacao.common',
  'redacao.config',
  'redacao.camera',
  'redacao.modulos',
  'redacao.trabalhos',
  'redacao.envios',
  'redacao.comentarios',
  'redacao.login',
  'redacao.interceptors',
  'redacao.menu'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (navigator && navigator.splashscreen) {
      navigator.splashscreen.hide();
    };
  });
})

.config(function($urlRouterProvider,
  $httpProvider) {

  $httpProvider.interceptors.push('ClientAuthenticationInterceptor');

	$urlRouterProvider.otherwise('/app/login');
});
