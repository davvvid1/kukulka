(function () {
    'use strict';

    function footBarController($scope, $timeout) {
        var ctrl = this;

        $scope.$on('highlight-contact', function () {
            $timeout(function () {
                ctrl.isHighlighted = true;
            }, 1000);
            $timeout(function () {
                ctrl.isHighlighted = false;
            }, 1500);
        })

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
