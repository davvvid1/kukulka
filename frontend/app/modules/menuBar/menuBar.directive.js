(function () {
    'use strict';

    function menuBar() {
        return {
            restrict: 'E',
            templateUrl: 'modules/menuBar/menuBar.tpl.html',
            link: function (scope) {
                scope.openMenuContent = function () {
                    scope.$broadcast('open-menu-content');
                }
            }
        };
    }

    angular.module('restaurant').directive('menuBar', [menuBar]);
})();
