'use strict';

angular.module('myApp.home', ['ngRoute', 'firebase'])

  //Declared Routes
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
  }])

  //Home controller
  .controller('HomeCtrl', ['$scope', '$firebaseSimpleLogin', function($scope,$firebaseSimpleLogin){
    //logic to handle firebase login
    var firebaseObj = new Firebase('https://popping-fire-4169.firebaseio.com');
    var loginObj = $firebaseSimpleLogin(firebaseObj);

    $scope.user = {};
    $scope.SignIn = function(event){
      event.preventDefault();
      var username = $scope.user.email;
      var password = $scope.user.password;

      //handle login errors
      loginObj.$login('password', {
        email: username,
        password: password
      })
      .then(function(user){
          //success callback
          console.log('Login successful');
      },  function(error){
          console.log('Login failed');
      });

      //auth logic
    }

  }]);
