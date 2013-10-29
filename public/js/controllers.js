app.controller('ChatController', ['$scope','$http', function($scope,$http) {

	console.log("Chat Controller Called");
	$scope.init = true;
	$scope.nickInput = "";
	$scope.message = "";
	
	$http.get("/getmessage")
			.success(function(data) {
				$scope.conversation = data;
			});
	

	$scope.changeNickname = function() {

		if($scope.nickInput !== "")
		{
			console.log("changeNickname called");
			$scope.init= false;
		}
	};

	$scope.sendMessage = function() {
		console.log("sendMessage called");

		$http.post("/message", {nickname: $scope.nickInput, message: $scope.message})
			.success(function() {

				$scope.conversation.push({nickname: $scope.nickInput , message: $scope.message});
				$scope.message = "";
			});
	};

}]);