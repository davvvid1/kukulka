(function () {
    'use strict';

    function dynamicSliderContent($timeout, $compile, $templateCache, $rootScope) {
        return {
            restrict: 'E',
            scope: {
                sliderId: '=',
                slides: '=',
                control: '='
            },
            templateUrl: 'modules/menu/dynamicSliderContent.tpl.html',
            link: function (scope, element) {

                var sliderElement;
                var slider;

                $timeout(function () {
                    sliderElement = element.find('#' + scope.sliderId);
                    sliderElement.sliderPro({
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

                    slider = sliderElement.data('sliderPro');
                    slider.resize();
                });

                scope.gotoSlide = function gotoSlide(index) {
                    slider.gotoSlide(index)
                };
            }
        };
    }

    angular.module('restaurant').directive('dynamicSliderBar', ['$timeout', '$compile', '$templateCache', '$rootScope', dynamicSliderContent]);
})();
