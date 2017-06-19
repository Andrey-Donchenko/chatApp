(function() {

    'use strict';

    angular
        .module("app")
        .component("signOut", {
            templateUrl: 'app/chatRoom/signOut/signOut.html',
            controller: ['$state', 'Auth', function($state, Auth) {
            	this.signOut = () => {
		            Auth.$signOut();
		            $state.go("login");
		        };
            }],
            controllerAs: 'signOutCtrl'
        });
})();