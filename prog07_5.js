var app1 = angular.module('app1', []);
	
app1.controller('ctrl1', function($scope) {
	$scope.blur = 0;
	$scope.mouseenter = 0;
	$scope.mouseleave = 0;
	
	
	$scope.disableButton = true;
});