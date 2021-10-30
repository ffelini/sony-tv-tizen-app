function initGestureController(onSwipeUp, onSwipeDown, onSwipeLeft,
		onSwipeRight, onTap, onDoubleTap, onTwoFingersTap,
		onTwoFingersDoubleTap, onBezelRotateLeft, onBezelRotateRight) {
	var touchArea = document.getElementById("swipe_control_area");
	var logText = document.getElementById("log_text");

	tau.event.enableGesture(touchArea, new tau.event.gesture.Swipe({
		orientation : "horizontal"
	}));
	tau.event.enableGesture(touchArea, new tau.event.gesture.Swipe({
		orientation : "vertical"
	}));

	handleTapEvents(touchArea, function onSingleTapEvent() {
		logText.innerHTML = "single tap";
		onTap();
	}, function onDoubleTapEvent() {
		logText.innerHTML = "double tap";
		onDoubleTap();
	}, function onTwoFingersTapEvent() {
		logText.innerHTML = "two fingers tap";
		onTwoFingersTap();
	}, function onTwoFingersDoubleTapEvent() {
		logText.innerHTML = "two fingers double tap";
		onTwoFingersDoubleTap();
	});

	touchArea.addEventListener("swipe", function onSwipe(e) {
		switch (e.detail.direction) {
		case tau.event.gesture.Direction.UP:
			onSwipeUp();
			break;
		case tau.event.gesture.Direction.DOWN:
			onSwipeDown();
			break;
		case tau.event.gesture.Direction.LEFT:
			onSwipeLeft();
			break;
		case tau.event.gesture.Direction.RIGHT:
			onSwipeRight();
			break;
		default:
		}
		logText.innerHTML = "direction - " + e.detail.direction
				+ ", velocity - " + e.detail.velocity + ", timeThreshold - "
				+ e.detail.timeThreshold;
	});

	onBezelRotate(function onLeft() {
		logText.innerHTML = "Bezel left";
		onBezelRotateLeft();
	}, function onRight() {
		logText.innerHTML = "Bezel right";
		onBezelRotateRight();
	});
};