var SCREEN_TO_LAUNCH_KEY = "screen_to_launch_key";

var HOME_SCREEN = "home_screen";
var SETTINGS_SCREEN = "settings_screen";
var SWIPE_CONTROL_SCREEN = "swipe_control_screen";

function getScreenToLaunch() {
	var screen = tizen.preference.exists(SCREEN_TO_LAUNCH_KEY);
	if (screen != null) {
		return screen;
	} else {
		return HOME_SCREEN;
	}
}

function setScreenToLaunch(screen) {
	tizen.preference.setValue(SCREEN_TO_LAUNCH_KEY, screen);
}