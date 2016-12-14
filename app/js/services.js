'use strict';

/* Services */

var profileBuilderServices = angular.module('profileBuilderServices', ['ngResource']);

profileBuilderServices.service('DataService', ['$http', '$resource', '$q',  function($http, $resource, $q){
    var result;

    this.get = function(url) {
    	result = $http.get(url).success(function (data, status) {
    		result = (data);
    	}).error(function(){

    	});
    	return result;
    };




		this.post = function(url, data) {
			var deffered = $q.defer();
			$http({
	            url: url,
	            method: "POST",
	            data: data,
	            headers: "application/json"
	        }).then(function(response) {
	        	deffered.resolve(response);
	        });		            


			return deffered.promise;
        };

}]);