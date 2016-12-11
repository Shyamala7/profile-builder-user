'use strict';

/* Controllers */

var profileBuilderController = angular.module('phonecatControllers', []);

profileBuilderController.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

profileBuilderController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    /*$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };*/
  }]);

profileBuilderController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 
  function($scope, $routeParams) {
    $scope.SignUp = function(signUpdetails){
      
    }
  }]);