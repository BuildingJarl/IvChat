var app = angular.module("IvChat", []);

app.config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'partials/chat',
		controller: 'ChatController'
	}).
	otherwise({
		redirectTo: '/',
		controller: 'ChatController'
	});
	$locationProvider.html5Mode(true);
}]);




