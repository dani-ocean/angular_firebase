'use strict';

angular.module('myApp.register', ['ngRoute'])

//Declared Routes
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
  });

}])

//Register Controller
.controller('RegisterCtrl', [function(){

}]);
