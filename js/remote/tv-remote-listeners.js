var mainPageButtonsSetupComplete = false;
var navigationPageButtonsSetupComplete = false;
var playerPageButtonsSetupComplete = false;

var toggleStates = {};

function setRemoteButtonAction(buttonId, action) {
	document.getElementById(buttonId).addEventListener("click", function() {
		sendTvRequest(action);
	});
}

function setRemoteToggleAction(buttonId, actionOn, actionOff) {
	var toggle = document.getElementById(buttonId);
	toggle.addEventListener("click", function() {
		if (toggleStates[buttonId] == null || toggleStates[buttonId] == false) {
			toggleStates[buttonId] = true
			sendTvRequest(actionOff);
			toggle.textContent = actionOff;
		} else {
			toggleStates[buttonId] = false
			sendTvRequest(actionOff);
			toggle.textContent = actionOn;
		}
	});
}

function setupMainPageButtons() {
	if (mainPageButtonsSetupComplete) {
		return;
	}
	setRemoteButtonAction("button_power", "power");
	setRemoteButtonAction("button_volume_up", "volumeUp");
	setRemoteButtonAction("button_volume_down", "volumeDown");
	setRemoteButtonAction("button_home", "home");

	mainPageButtonsSetupComplete = true;
}

function setupRemoteNavigationButtons() {
	if (navigationPageButtonsSetupComplete) {
		return;
	}
	setRemoteButtonAction("button_options", "options");
	setRemoteButtonAction("button_up", "up");
	setRemoteButtonAction("button_input", "input");
	
	setRemoteButtonAction("button_left", "left");
	setRemoteButtonAction("button_ok", "confirm");
	setRemoteButtonAction("button_right", "right");
	
	setRemoteButtonAction("button_back", "back");
	setRemoteButtonAction("button_down", "down");
	setRemoteButtonAction("button_mute", "toggle_mute");

	navigationPageButtonsSetupComplete = true;
}

function setupPlaybackButtons() {
	if (playerPageButtonsSetupComplete) {
		return;
	}
	setRemoteButtonAction("button_prev", "prev");
	setRemoteButtonAction("button_next", "next");
	setRemoteToggleAction("button_toggle_playback", "play", "pause");
	setRemoteButtonAction("button_stop", "stop");

	playerPageButtonsSetupComplete = true;
}

function setupRemoteButtons() {
	setupMainPageButtons();
	setupRemoteNavigationButtons();
	setupPlaybackButtons();
}