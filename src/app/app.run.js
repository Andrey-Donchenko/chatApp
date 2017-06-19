(function() {
	
    'use strict';

	function run ($rootScope, $state) {
		
		$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
		    if (error === "AUTH_REQUIRED") {
	  			$state.go("login");
			}
		});
	}
	
	angular
    	.module("app")
		.run(["$rootScope", "$state", run]);
})();