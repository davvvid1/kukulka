(function () {
    'use strict';

    angular.module('restaurant', [
        'ngRoute',
        'ngResource',
        'uiGmapgoogle-maps',
        'duScroll'
    ]).value('duScrollDuration', 1000);
})();
