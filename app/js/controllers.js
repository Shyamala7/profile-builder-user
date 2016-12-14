'use strict';

/* Controllers */

var profileBuilderController = angular.module('profileBuilderControllers', []);

profileBuilderController.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);



profileBuilderController.controller('SignUpCtrl', ['$scope', '$routeParams', 'DataService', '$rootScope',
  function($scope, $routeParams, DataService, $rootScope) {
    $scope.SignUp = function(signUpdetails){
      console.log(JSON.stringify(signUpdetails));
      DataService.post($rootScope.baseURL+"registerUser", signUpdetails).then(function (resp){
        console.log(resp);
      });
    }
  }]);


  profileBuilderController.controller('SignInCtrl', ['$scope', '$routeParams', 'DataService', '$rootScope',
  function($scope, $routeParams, DataService, $rootScope) {
    $scope.SignIn = function(signIndetails){
 DataService.post($rootScope.baseURL+"userlogin", signIndetails).then(function (resp){
        console.log(resp);
      });
    }
  }]);
