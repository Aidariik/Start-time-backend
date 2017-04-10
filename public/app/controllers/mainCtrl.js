angular.module('mainCtrl', ['authService','ngTagsInput','ngResource'])
//
	.controller('homeCtrl', function(){
		var vm = this;
		vm.message = 'HELLO';

	})

	.controller('testCtrl', function($resource,$http){
		//$http.get('http://jsonplaceholder.typicode.com/users/')

		var vm = this;
		vm.message = 'HELLO';
		$http.get('http://localhost:8080/api/tags').success((data)=>{vm.tags=data;});
		
		//console.log(tags.query());
  
/* vm.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
  */ 
  vm.loadTags = function(query) {
	  alert('loading tags');
    return tags.query().$promise;
  };
	var person={
		_id:['bla','bla','bla'],
		name:'Miras',
		username:'Miras_miras'
	};
	var person1={
		_id:['bla','bla','bla'],
		name:'Miras1',
		username:'Miras_miras'
	};
		var person2={
		_id:['bla','bla','bla'],
		name:'Miras2',
		username:'Miras_miras'
	};
	vm.persons=[];
	vm.persons.push(person);
	vm.persons.push(person1);
	vm.persons.push(person2);
	})

	.controller('mainController',['$scope','Auth','$location','$rootScope',
		function($rootScope,Auth,$location,$scope) {
		var vm = this;
		//get info if a person is logged in


	}]);





