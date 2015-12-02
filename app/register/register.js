'use strict';

angular.module('myApp.register', ['ngRoute', 'firebase'])

//Declared Routes
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
  });

}])

//Register Controller
.controller('RegisterCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth){

  $scope.signUp = function(){
    var firebaseObj = new Firebase('https://popping-fire-4169.firebaseio.com');
    var auth = $firebaseAuth(firebaseObj);

    //signup for firebase acct
    if(!$scope.regForm.$invalid){
      var email = $scope.user.email;
      var password = $scope.user.password;
      if (email && password){
        //looks good, call to firebase
        auth.$createUser(email, password)
          .then(function(){
            //looks good, send to signin
            $location.path('/home');

          }, function(error){
            //somethings wrong, let user know
            $scope.regError = true;
            $scope.regErrorMessage = error.message;
          });
      }

    }

  }

}]);
