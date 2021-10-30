var PREFERENCE_IP_KEY = "ip";
var PREFERENCE_SYNC_POWER_STATUS_KEY = "sync_power_status";
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
	if (tizen.preference.exists(PREFERENCE_SYNC_POWER_STATUS_KEY)) {
		settings.syncPowerStatus = tizen.preference.getValue(PREFERENCE_SYNC_POWER_STATUS_KEY);
	} else {
		settings.syncPowerStatus = true;
	}
	onComplete(settings);
}