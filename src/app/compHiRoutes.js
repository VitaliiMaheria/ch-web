(function (angular) {
    'use strict';
    
    function config($routeProvider) {
        $routeProvider
            .when('/CompaniesHierarhy', {
                templateUrl: 'app/comphi/templates/comphi.html',
                controller: 'CompHiCtrl',
                controllerAs: 'chCtrl',
				resolve: {
					companies: ['CompHiService', function(CompHiService) {
						return CompHiService.getCompaniesHierarhy();
					}]
                }
            })
            .otherwise('/CompaniesHierarhy');
    }

    config.$inject = [
        '$routeProvider'
    ];
    angular.module('CompHi').config(config);
})(window.angular)