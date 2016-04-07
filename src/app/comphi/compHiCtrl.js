(function (angular) {
    'use strict';

    function CompHiCtrl($scope, $modal, CompHiService) {

        var getCompaniesHierarhy = function () {
            CompHiService.getCompaniesHierarhy(
                function (error, answer) {
                    if (!error) $scope.companies = answer;
                });
        }

        $scope.companies = [];
        
        $scope.createCompany = function (company) {
            CompHiService.createCompany(company, function (error, answer) {
                if (!error) getCompaniesHierarhy();
            });
        };

        $scope.saveCompany = function (company) {
            CompHiService.updateCompany(company,
                function (error, answer) {
                    if (!error) getCompaniesHierarhy();
                });
        };

        $scope.deleteCompany = function (id) {
            CompHiService.deleteCompany(id, function (error, answer) {
                if (!error) getCompaniesHierarhy();
            });
        };
        getCompaniesHierarhy();

//         $scope.newCompany = function (id) {
//             vm.createCompanyForm.id = id;
//             $modal.open({
//                 templateUrl: 'app/comphi/templates/createCompany.html',
//                 controller: 'CompHiCtrl',
//                 controllerAs: 'addcomp',
//                 size: 'md',
//                 createCompanyForm: vm.createCompanyForm,
//                 keyboard: false,
//                 resolve: {
//                     parentCompanyId: id
//                 }
//             });
//         }
// 
//         $scope.cancel = function () {
//             $modal.dismiss('cancel');
//         }
//         
//         
//         
        
    $scope.newCompany = function (id) {
        var modalInstance = $modal.open({
            templateUrl: 'app/comphi/templates/createCompany.html',
            controller: 'CreateCompanyCtrl',
            size: 'md',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } },
                'company': function() { return {parentCompanyId: id} }
            }
        });
        console.log('modal opened');
        modalInstance.result.then(function (response) {
            $scope.createCompany(response);
        });
    };        
             
     
    }

    CompHiCtrl.$inject = [
        '$scope',
        '$modal',
        'CompHiService'
    ];

    angular.module('CompHi')
        .controller('CompHiCtrl', CompHiCtrl);
})(window.angular);
