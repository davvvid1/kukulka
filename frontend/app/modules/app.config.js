(function () {
    'use strict';

    function config($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'modules/home/home.tpl.html',
            controller: 'Home as home'
        });

        $routeProvider.otherwise({redirectTo: '/'});

        $locationProvider.hashPrefix('');
    }


    angular.module('restaurant').config(['$routeProvider', '$locationProvider', config]);
})();
