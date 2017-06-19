(function() {
    
    'use strict';

    angular
        .module('app')
        .component('signUp', {
            templateUrl: 'app/signUp/signUp.html',
            controller: ['$state', 'Auth', function ($state, Auth) {
		        const ctrl = this;

		        ctrl.openChat = openChat;
		        ctrl.checkValid = checkValid;

		        function openChat() {
		        	if (checkValid()) {
		        		return;
		        	}
		            Auth.$createUserWithEmailAndPassword(ctrl.email, ctrl.password)
		            .then(firebaseUser => {
		                localStorage.setItem('chatName', firebaseUser.email);
		                $state.go("chat");
		            }).catch(error => {
		            	console.log(error)
		                ctrl.error = error.message;
		            });
		        }

		        function checkValid() {
                	return (ctrl.password !== ctrl.confirm)
				}
    		}],
            controllerAs: 'signUpCtrl'
        });
})();