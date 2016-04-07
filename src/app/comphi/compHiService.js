(function (angular) {
    'use strict';

    function CompHiService($http, $q, ApiServerUrl) {
        var service = {};
        service.getCompaniesHierarhy = getCompaniesHierarhy;
        service.createCompany = createCompany;
        service.updateCompany = updateCompany;
        service.deleteCompany = deleteCompany;

        return service;

        function getCompaniesHierarhy(callback) {
            $http.get(ApiServerUrl + 'api/Companies')
                .success(function (response) {
                    callback(null, response);
                })
                .error(function (e) {
                    callback(e);
                });
        }

        function createCompany(company,callback) {
            $http.post(ApiServerUrl + 'api/Companies', company)
                .success(function (response) {
                    callback(null, response);
                })
                .error(function (e) {
                    callback(e);
                });
        }

        function updateCompany(company,callback) {
            $http.put(ApiServerUrl + 'api/Companies', company)
                .success(function (response) {
                    callback(null, response);
                })
                .error(function (e) {
                    callback(e);
                });
        }

        function deleteCompany(id,callback) {
            $http.delete(ApiServerUrl + 'api/Companies/'+id)
                .success(function (response) {
                    callback(null, response);
                })
                .error(function (e) {
                    callback(e);
                });
        }
    }

    CompHiService.$inject = ['$http', '$q', 'ApiServerUrl'];
    angular
        .module('CompHi')
        .service('CompHiService', CompHiService);

})(window.angular);
