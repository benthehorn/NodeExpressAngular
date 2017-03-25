'use strict';

angular.module('myApp',[
    'ngRoute',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services',
    'myApp.factories',
    'myApp.filters',
    'myApp.view1',
     'myApp.view2'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);