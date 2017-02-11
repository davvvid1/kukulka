(function () {
    'use strict';

    function menuBarController() {
        var ctrl = this;

    }

    function menuBar() {
        return {
            restrict: 'E',
            controller: ['$location', '$scope', menuBarController],
            controllerAs: 'menuBar',
            templateUrl: 'modules/menuBar/menuBar.tpl.html'
        };
    }

    angular.module('restaurant').directive('menuBar', [menuBar]);
})();
