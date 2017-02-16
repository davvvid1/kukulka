(function () {
    'use strict';

    function menuController($timeout) {
        var ctrl = this;
        ctrl.slides = [1];
        ctrl.control = {};


        $timeout(function () {
            ctrl.show = true;
        }, 1000)


    }

    angular.module('restaurant').controller('Menu', menuController);

})();
