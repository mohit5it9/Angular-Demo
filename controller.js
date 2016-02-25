angular.module('test',[])
	.controller('rateController',['$scope',function ($scope) {
		console.log('Hello');
		$scope.mohit="Hello";
		this.qty=1;
		this.price=20;
		this.usdToOther={
			$:1,
			Rs:0.5,
			Yen:0.8
		};
		this.total = function total(curr){
			return (((this.qty*this.price)/this.usdToOther[this.value])*this.usdToOther[curr]);
		};
		this.currencies=['Rs','$','Yen'];
		this.value='Yen';
		// body...
	}]);