(function () {
    'use strict';

    function menuController() {


        $('#menu-slider').sliderPro({
            width: '100%',
            height: '600px',
            arrows: true,
            buttons: false,
            touchSwipe: true,
            waitForLayers: true,
            fade: false,
            autoplay: false,
            autoScaleLayers: false,
            responsive: false
        });

        var slider = $('#menu-slider').data('sliderPro');

        slider.resize();
    }

    angular.module('restaurant').controller('Menu', menuController);

})();
