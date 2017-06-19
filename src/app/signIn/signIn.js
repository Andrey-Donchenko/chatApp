(function() {
    
    'use strict';

    angular
        .module('app')
        .component('signIn', {
            templateUrl: 'app/signIn/signIn.html',
            controller: ['$state', 'Auth', function ($state, Auth) {
		        const ctrl = this;

		        ctrl.$onInit = () => {
		            let check = localStorage.getItem('chatName');
		            if (check) {
		                ctrl.email = check;
		            }
		        };
		        ctrl.openChat = () => {
		            Auth.$signInWithEmailAndPassword(ctrl.email, ctrl.password)
		            .then(firebaseUser => {
		                localStorage.setItem('chatName', firebaseUser.email);
		                $state.go("chat");
		            }).catch(error => {
		                ctrl.error = error.message;
		            });
		        };
    		}],
            controllerAs: 'signInCtrl'
        });
})();