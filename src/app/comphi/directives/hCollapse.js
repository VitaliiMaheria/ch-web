(function (angular) {
    'use strict';

    function hCollapseDirective() {
        return {
            link: function (scope, elem, attrs, ctrl) {
                scope.collapsed = false;
                scope.$watch('collapse', function (collapsed) {
                    elem.toggleClass('collapse', !!collapsed);
                });
            },
            scope: {},
            templateUrl: 'app/comphi/templates/collapse.html',
            transclude: true
        };
    }
    angular
        .module("CompHi")
        .directive("hCollapse", hCollapseDirective);

})(window.angular);
