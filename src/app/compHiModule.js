(function (angular) {
    'use strict';
    
    var apiUrl = 'http://localhost:59015/';
    
    angular.module('CompHi', ['ngRoute', 'ui.bootstrap'])
        .constant('ApiServerUrl', apiUrl);
})(window.angular);
