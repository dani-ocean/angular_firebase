'use strict';

angular.module('myApp.welcome', ['ngRoute'])

//Declared Routes
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welecome', {
      templateUrl: 'welcome/welcome.html',
      controller: 'WelcomeCtrl'
  });

}])

.controller('WelcomeCtrl', ['$scope', function($scope){
  
}]);
