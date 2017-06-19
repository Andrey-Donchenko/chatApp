(function() {

    'use strict';

	function Chat ($rootScope, $firebaseArray, $timeout) {
	 	const messagesRef = firebase.database().ref().child("messages");
	 	const factory = {
	 		addMessage: addMessage,
	 		getMessages: getMessages,
	 		getLastData: getLastData,
	 		scrollDown: scrollDown,
	 		playSound: playSound
	 	};
	 	return factory;

	 	function addMessage(message) {
	 		factory.getMessages().$add(message)
	 			.then(() => {
	 				$rootScope.$broadcast("messageEvent");
	 			});
	 	}
	 	function getMessages() {
	  		return $firebaseArray(messagesRef);
	 	}
	 	function getLastData() {
	  		return $firebaseArray(messagesRef.limitToLast(30));
	 	}
	 	function scrollDown(el, time) {
            $timeout(() => {
                el.scrollTop = el.scrollHeight;
            }, time)
        }
        function playSound(filePath) {
			let audio = new Audio();
			audio.src = filePath;
		    audio.autoplay = true;
		}
    }
	   	
	angular
		.module('app')
		.factory('Chat', [
			'$rootScope',
			'$firebaseArray',
			'$timeout',
			Chat]);
})();