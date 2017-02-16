(function () {
    'use strict';

    function menuController($scope, $timeout) {
        var ctrl = this;
        ctrl.slides = [1];
        ctrl.control = {};


        $timeout(function () {
            ctrl.show = true;
        }, 1000);

        ctrl.toggleContent = function () {
            ctrl.contentVisible = !ctrl.contentVisible;
        };

        $scope.$on('open-menu-content', function () {
            $timeout(function () {
                ctrl.contentVisible = true;
            }, 500);
        })
    }

    angular.module('restaurant').controller('Menu', menuController);

})();
