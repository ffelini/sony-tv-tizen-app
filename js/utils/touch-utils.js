var doubleTapTimer = null;
var twoFingersDoubleTapTimer = null;

var moving = false;
var touchStartedEvent = null;

function handleTapEvents(view, onSingleTap, onDoubleTap, onTwoFingersTap,
		onTwoFingersDoubleTap) {
	view.addEventListener('touchmove', function(e) {
		moving = true;
	});
	view.addEventListener('touchstart', function(e) {
		moving = false;
		touchStartedEvent = e;
	});
	view.addEventListener('touchend', function(e) {
		if (moving) {
			return false;
		}

		switch (touchStartedEvent.touches.length) {
		case 2:
			// if (twoFingersDoubleTapTimer === null) {
			// twoFingersDoubleTapTimer = setTimeout(function() {
			// twoFingersDoubleTapTimer = null;
			// handle single tap
			onTwoFingersTap();
			// }, 500);
			// } else {
			// clearTimeout(twoFingersDoubleTapTimer);
			// twoFingersDoubleTapTimer = null;
			// // handle double tap
			// onTwoFingersDoubleTap();
			// }
			break;
		}
		return false;
	});
	view.addEventListener('click', function(e) {
		if (doubleTapTimer === null) {
			doubleTapTimer = setTimeout(function() {
				doubleTapTimer = null;
				// handle single tap
				onSingleTap();
			}, 300);
		} else {
			clearTimeout(doubleTapTimer);
			doubleTapTimer = null;
			// handle double tap
			onDoubleTap();
		}
	});
}
