(function() {
	function init() {
		initRemoteApi(function onRemoteApiComplete() {
			loadSettings(function onSettingsComplete(settings) {
				if (!isEmpty(settings.ip)) {
					initGestureController(onSwipeUp, onSwipeDown, onSwipeLeft,
							onSwipeRight, onTap, onDoubleTap, onTwoFingersTap, onTwoFingersDoubleTap,
							onBezelRotateLeft, onBezelRotateRight);
				} else {
					// what else?
				}
			});
		});
	}

	function onSwipeUp() {
		sendTvRequest("up");
	}
	function onSwipeDown() {
		sendTvRequest("down");
	}
	function onSwipeLeft() {
		sendTvRequest("left");
	}
	function onSwipeRight() {
		sendTvRequest("right");
	}
	function onTap() {
		sendTvRequest("confirm")
	}
	function onDoubleTap() {
		sendTvRequest("back")
	}
	function onTwoFingersTap() {
		sendTvRequest("home")
	}
	function onTwoFingersDoubleTap() {
		sendTvRequest("options")
	}
	function onBezelRotateLeft() {
		sendTvRequest("volumeDown")
	}
	function onBezelRotateRight() {
		sendTvRequest("volumeUp")
	}

	window.onload = init;
	window.addEventListener("tizenhwkey", function(ev) {
		if (ev.keyName === "back") {
			window.history.back();
		}
	});

}());