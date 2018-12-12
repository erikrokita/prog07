var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
	$scope.groceries=[
		{item: "TV", purchased: false},
		{item: "Potatoes", purchased: false},
		{item: "Bread", purchased: false},
		{item: "Another TV", purchased: false}
	];
});