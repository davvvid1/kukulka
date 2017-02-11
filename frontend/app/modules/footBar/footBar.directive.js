(function () {
    'use strict';

    function footBarController() {
        var ctrl = this;

    }

    function footBar() {
        return {
            restrict: 'E',
            controller: footBarController,
            controllerAs: 'menuBar',
            templateUrl: 'modules/footBar/footBar.tpl.html'
        };
    }

    angular.module('restaurant').directive('footBar', [footBar]);
})();
