(function () {
    'use strict';

    function homeController() {

        $('#main-slider').sliderPro({
            width: '100%',
            height: '1200px',
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

        var slider = $('#main-slider').data('sliderPro');

        slider.resize();

        this.map = {
            center: {latitude: 50.0120949, longitude: 20.9820169},
            zoom: 18,
            options: {
                scrollwheel: false,
                draggable: false,
                disableDoubleClickZoom: true
            }
        };
    }

    angular.module('restaurant').controller('Home', homeController);

})();
