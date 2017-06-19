(function() {

    'use strict';

    angular
        .module("app")
        .component("newMessage", {
            templateUrl: 'app/chatRoom/newMessage/newMessage.html',
        	bindings: {
        		user: '<',
        		scroll: '<'
        	},
            controller: ['Chat', function(Chat) {
            	const ctrl = this;

            	const filePath = 'files/output.mp3';

            	ctrl.sendMessage = () => {
		            if(!ctrl.text) {
		                return;
		            }
		            let message = {
		                author: ctrl.user.email,
		                time: firebase.database.ServerValue.TIMESTAMP,
		                content: ctrl.text
		            };
		            Chat.addMessage(message);
		            Chat.scrollDown(ctrl.scroll, 100);
		            Chat.playSound(filePath);
		            ctrl.text = '';
		        };

		        
			}],
            controllerAs: 'newMessageCtrl'
        });
})();