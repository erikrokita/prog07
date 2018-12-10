var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
	$scope.first = 1;
	$scope.second = 1;
	
	$scope.updateValueSum = function(){
		$scope.calculation = $scope.first + ' + ' + $scope.second  + " = " + (+$scope.first + $scope.second);
	}
	$scope.updateValueSub = function(){
		$scope.calculation = $scope.first + ' - ' + $scope.second  + " = " + (+$scope.first - $scope.second);
	}
	$scope.updateValueMul = function(){
		$scope.calculation = $scope.first + ' x ' + $scope.second  + " = " + (+$scope.first * $scope.second);
	}
	$scope.updateValueDiv = function(){
		$scope.calculation = $scope.first + ' / ' + $scope.second  + " = " + (+$scope.first / $scope.second);
	}
	
	$scope.randNum = Math.floor((Math.random()*99) + 1);
	
		
	var feelings = ["Happy", "Sad", "Angry", "Tired", "Ill", "Sore"];
	
	$scope.randMood = feelings[Math.floor((Math.random()*6))];
	
	$scope.groceries=[
		{item: "TV", purchased: false},
		{item: "Potatoes", purchased: false},
		{item: "Bread", purchased: false},
		{item: "Another TV", purchased: false}
	];
	
	$scope.blur = 0;
	$scope.mouseenter = 0;
	$scope.mouseleave = 0;
	
});
