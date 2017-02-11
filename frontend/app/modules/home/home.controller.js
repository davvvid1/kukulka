(function () {
    'use strict';

    function homeController() {


        $('#my-slider').sliderPro({
            width: '100%',
            height: '800px',
            arrows: false,
            buttons: false,
            touchSwipe: false,
            waitForLayers: true,
            fade: true,
            autoplay: true,
            autoplayDelay: 4000,
            autoplayOnHover: 'none',
            autoScaleLayers: false,
            responsive: false
        });

        var slider = $('#my-slider').data('sliderPro');

        slider.resize();
    }

    angular.module('restaurant').controller('Home', homeController);

})();
