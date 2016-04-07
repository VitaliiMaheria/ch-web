(function (angular) {
    var hRecursiveDirective = function ($compile) {
        return {
            link: function (scope, elem, attrs, ctrl) {
                ctrl.transclude(scope, function (content) {
                    elem.after(content);
                });
            },
            controller: function ($element, $transclude) {
                var parent = $element.parent().controller('hRecursive');
                this.transclude = angular.isObject(parent)
                    ? parent.transclude
                    : $transclude;
            },
            priority: 500,  // ngInclude < hRecursive < ngIf < ngRepeat < ngSwitch
            require: 'hRecursive',
            terminal: true,
            transclude: 'element',
            $$tlb: true  // Hack: allow multiple transclusion (ngRepeat and ngIf)
        }
    }

    angular
        .module('CompHi')
        .directive('hRecursive', hRecursiveDirective);

})(window.angular);