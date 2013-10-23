angular.module("IvChat", []).
	config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'partials/chat',
			controller: ChatController
		}).
		otherwise({
			redirectTo: '/',
			controller: ChatController
		});
		$locationProvider.html5Mode(true);
	});

function ChatController($scope, $http, $location) {

	console.log("Chat Controller Called");
	$scope.init = true;
	$scope.nickInput = "";
	$scope.message = "";
	$scope.conversation = [];
	$scope.conversation.push({nickname: "you" , message: "hello hello"});

	$scope.changeNickname = function() {

		if($scope.nickInput !== "")
		{
			console.log("changeNickname called");
			$scope.init= false;
		}
	};

	$scope.sendMessage = function() {
		console.log("sendMessage called");
		$scope.conversation.push({nickname: $scope.nickInput , message: $scope.message});
		$scope.message = "";
	};

}