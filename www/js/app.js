angular.module('redacao', [
  'ionic',
  'ionic.native',
  'redacao.api',
  'redacao.camera',
  'redacao.modulos',
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
  });
})

.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/app/modulos');
});
