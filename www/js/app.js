var db = null;

angular.module('redacao', [
  'ionic',
  'ionic.native',
  'ngCordova',
  'redacao.app',
  'redacao.common',
  'redacao.config',
  'redacao.camera',
  'redacao.modulos',
  'redacao.trabalhos',
  'redacao.envios',
  'redacao.comentarios',
  'redacao.login',
  'redacao.aulas',
  // 'redacao.directives',
  'redacao.interceptors',
  'redacao.menu'])

.run(function($ionicPlatform, DatabaseService) {
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

    // DatabaseService.init();
  });
})

.config(function($urlRouterProvider,
  $httpProvider) {

  $httpProvider.interceptors.push('ClientAuthenticationInterceptor');

	$urlRouterProvider.otherwise('/app/login');
});
