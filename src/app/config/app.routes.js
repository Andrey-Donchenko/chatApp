(function() {

    'use strict';
   
    function config ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/login');
        
		$stateProvider
    		.state("login", {
		    	url: '/login',
		    	template: '<sign-in></sign-in>',
		    	resolve: {
    		        "currentAuth": ["Auth", function(Auth) {
				        return Auth.$waitForSignIn();
    				}]
    			}
    		})
            .state("register", {
                url: '/register',
                template: '<sign-up></sign-up>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$waitForSignIn();
                    }]
                }
            })
			.state("chat", {
			    url: '/chat',
			    template: '<chat-room></chat-room>',
				resolve: {
    		        "currentAuth": ["Auth", function(Auth) {
				        return Auth.$requireSignIn();
    				}]
    			}
    		});
	}

	angular
        .module('app')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            config
        ]);
})();
