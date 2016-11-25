'use strict';

var app = angular.module('app.Home', ['ngRoute']);
app.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.when("/", {
            controller: 'HomeController',
            templateUrl: '/Home/'
        });
        $routeProvider.when('/Create', { templateUrl: '/Home/Create', controller: 'homeCreate' });
        $routeProvider.when('/Edit/:id', { templateUrl: '/Home/Edit', controller: 'homeEdit' });
        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);