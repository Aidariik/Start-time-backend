angular.module('userApp', [
	'ngAnimate',
	'app.routes',
	'authService',
	'userService',
	'mainCtrl',
	'userCtrl',
	'ngResource',
	'ngTagsInput',
	'nemLogging'
	])
.config(function($httpProvider)	{	
	//attach our auth inteceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});