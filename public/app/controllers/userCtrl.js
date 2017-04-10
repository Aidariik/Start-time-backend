//inject the stuff service into main Angular module
angular.module('userCtrl',['userService'])	
//create a controller and inject the Stuff factory
	.controller('userController',function(User)	{
		
		var vm = this;

		//	set a processing variable to show loading things
		vm.processing = true;

		
		
	})

// controller applied to user creation page
	.controller('userCreateController', function(User)	{

		var vm = this;

		// variable to hide/show elements of the view
		// differentiates between create or edit page
		vm.type = 'create';
		// function to create a user
		
	})

	//	controller applied to user edit page
	.controller('userEditController', function($routeParams,User)	{
		var vm = this;
			//	variable to hide/show elemments of the view
			//	differentiates between create or edit pages
		vm.type = 'edit';

			//	get the user data for the user you want to edit
			//	$routeParams is the way we grab data from the URL
		
	});
