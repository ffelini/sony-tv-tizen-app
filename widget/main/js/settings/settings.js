var PREFERENCE_IP_KEY = "ip";
var settings;

function loadSettings(onComplete) {
	if (settings) {
		onComplete(settings);
		return;
	}
	reloadSettings(onComplete);
}

function reloadSettings(onComplete){
	settings = {};
	if (tizen.preference.exists(PREFERENCE_IP_KEY)) {
		settings.ip = tizen.preference.getValue(PREFERENCE_IP_KEY);
	}
	onComplete(settings);
}