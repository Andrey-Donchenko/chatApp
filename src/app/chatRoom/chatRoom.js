(function() {

    'use strict';
    
    angular
        .module("app")
        .component("chatRoom", {
            templateUrl: 'app/chatRoom/chatRoom.html',
            controller: ['$scope', '$interval', 'Auth', 'Chat', 'Data',
            	function ($scope, $interval, Auth, Chat, Data) {
			        const ctrl = this;

			        const filePath = 'files/input.mp3';
			        let loop;
			        ctrl.scroll = document.querySelector('.chat');

			        ctrl.$onInit = () => {
			            ctrl.data = Chat.getLastData();
			            ctrl.users = Data;
			            Chat.scrollDown(ctrl.scroll, 1500);
			            loop = $interval(() => {
							let index = Math.round(Math.random() * (ctrl.users.length - 1));
			                    Chat.addMessage(ctrl.users[index]);
			                    Chat.playSound(filePath);
			                }, 7000);
			        };

			    	$scope.$on("messageEvent", () => {
		                Chat.scrollDown(ctrl.scroll, 100);
		            });

			        Auth.$onAuthStateChanged(firebaseUser => {
			            if(firebaseUser) {
			                ctrl.user = firebaseUser;
			            }
					});

					ctrl.$onDestroy = () => {
      					$interval.cancel(loop);
    				};
				}
			],
            controllerAs: 'chatRoomCtrl'
        });
})();