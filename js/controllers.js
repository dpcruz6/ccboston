var controllers = angular.module('controllers', []);


controllers.controller('MainCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('json/main.json').success(function(data){
			$scope.menus = data;
			console.log(JSON.stringify($scope.menus));
		});
		
		$scope.test = [
		
		]
	}
]);
