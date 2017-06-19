(function() {

    'use strict';

	function Data() {

		const data = [
			{
				author: 'Kent',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'Lorem ipsum dolor sit amet'
			},
			{
				author: 'John',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'suscipit exercitationem'
			},
			{
				author: 'Sandy',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'tenetur expedita'
			},
			{
				author: 'Lisa',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'consectetur adipisicing elit'
			},
			{
				author: 'Kent',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'Lorem ipsum dolor sit amet'
			},
			{
				author: 'Kent',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'Fuga, consectetur corporis deleniti'
			},
			{
				author: 'Peter',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'obcaecati deleniti placeat eius temporibus'
			},
			{
				author: 'Mike',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'amet quisquam asperiores officia'
			},
			{
				author: 'Lisa',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'aliquam eius exercitationem'
			},
			{
				author: 'Mike',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'repudiandae deserunt vero'
			},
			{
				author: 'Kent',
				time: firebase.database.ServerValue.TIMESTAMP,
				content: 'molestiae quaerat aut vel iste'
			},
		];

		return data;
	}
	    	
  	angular
		.module("app")
		.factory("Data", Data);
})();