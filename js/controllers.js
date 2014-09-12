var controllers = angular.module('controllers', []);


// Main Controller
controllers.controller('MainCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('json/main.json').success(function(data){
			$scope.menus = data;
			// console.log(JSON.stringify($scope.menus));
		});
	}
]);

// What We Offer Controller
controllers.controller('WWOCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('json/whatweoffer.json').success(function(data){
			$scope.wwo = data;
		});
	}
]);

// Photos Controller
controllers.controller('PhotosCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('json/photos.json').success(function(data){
			$scope.photos = data;
			console.log(JSON.stringify($scope.photos));
			// initial image index
		    $scope._Index = 0;
		    // if a current image is the same as requested image
		    $scope.isActive = function (index) {
		        return $scope._Index === index;
		    };
		    // show prev image
		    $scope.showPrev = function () {
		        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
		    };
		 
		    // show next image
		    $scope.showNext = function () {
		        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
		    };
		    // show a certain image
		    $scope.showPhoto = function (index) {
		        $scope._Index = index;
		    };
		});
	}
]);

// About Controller
controllers.controller('AboutCtrl', ['$scope', '$http', '$sce',
	function($scope, $http, $sce){
		$http.get('json/about.json').success(function(data){
			$scope.about = data;
			$scope.about['about'] = $sce.trustAsHtml($scope.about['about']);
			// console.log($scope.about['paperRocket']);
		});
	}
]);

// Location Time Controller
controllers.controller('LocationTimeCtrl', ['$scope', '$http', '$sce',
	function($scope, $http, $sce){
		$http.get('json/locationTime.json').success(function(data){
			$scope.location = data;
			$scope.location['description'] = $sce.trustAsHtml($scope.location['description']);
		});
	}
]);
