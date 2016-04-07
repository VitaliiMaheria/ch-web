(function (angular) {
    'use strict';

    function CreateCompanyCtrl($scope, $modalInstance, company) {
        $scope.company = company;

        $scope.ok = function () {
            $modalInstance().close($scope.company);
        };
        $scope.cancel = function () {
            $modalInstance().dismiss('cancel');
        };



    }

    CreateCompanyCtrl.$inject = [
        '$scope',
        '$modalInstance',
        'company'
    ];

    angular.module('CompHi')
        .controller('CreateCompanyCtrl', CreateCompanyCtrl);
})(window.angular);
