(function() {
	'use strict';

	angular
		.module('redacao.modulos')
		.factory('moduloService', moduloService);

	// moduloService.$inject = ['dataService'];

	function moduloService(dataService) {
		var service = {
			// getFeaturedCategories: getFeaturedCategories,
			// getFeaturedProducts: getFeaturedProducts,
			// getBusiness: dataService.getBusiness
      getModulos: getModulos
		};
		return service;

		// function getFeaturedCategories() {
		// 	return dataService.getFeaturedCategories();
		// }
    //
		// function getFeaturedProducts() {
		// 	return dataService.getFeaturedProducts();
		// }

    function getModulos() {
      
    }
	}

})();
