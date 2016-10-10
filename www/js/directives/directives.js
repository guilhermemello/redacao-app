(function() {
	'use strict';

	angular
		.module('redacao.directives')
    .directive('RestrictContent', RestrictContent);

    function RestrictContent($state) {
      return {
        templateUrl: 'directives/video_content.html',
        restrict: 'E',
        replace: true,

        scope: {
          target: '=',
        },

        link: function ($scope, element, attributes) {
          $scope.stateName = $state.current.name
          $scope.state = $state
        }
      }
    }
  });
