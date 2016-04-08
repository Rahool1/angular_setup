'use strict';

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
	throw new Error("AdminLTE requires jQuery");
}

angular.module('AdminApp', ['ui.bootstrap', 'ui.router','AdminApp.directives'])
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/login');
	$stateProvider
	.state('login',{
		url:'/login',
		templateUrl: 'views/login.html'
		// controller: 'LoginCtrl'
	})
	.state('admin',{
		url: '/admin',
		templateUrl:'views/adminHome.html',
		abstract:true //not allow to load parent view
	})
	.state('admin.dashboard',{
		url:'/dashboard',
		templateUrl: 'views/dashboard/dashboard.html'
		// controller: 'LoginCtrl'
	});

});


