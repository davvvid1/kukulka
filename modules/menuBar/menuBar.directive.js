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
                scope.highlightContact = function () {
                    scope.$broadcast('highlight-contact');
                }
            }
        };
    }

    angular.module('restaurant').directive('menuBar', [menuBar]);
})();
