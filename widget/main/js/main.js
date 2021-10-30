var missingIpMessage = document.getElementById("missing_ip_message");
var controlsLayout = document.getElementById("controls_layout");

function init(onSuccess) {
	reloadIpSettings(onSuccess);
	document.addEventListener('visibilitychange', function() {
		if (document.visibilityState === 'hidden') {
		} else {
			reloadIpSettings(onSuccess);
		}
	});
	missingIpMessage.addEventListener("click", function() {
		openParentAppOnSettingsPage();
	});
}

function reloadIpSettings(onIpSettingsSuccess) {
	missingIpMessage.textContent = "Loading remote ip settings.";
	hideView(controlsLayout);

	reloadSettings(function onSettingsComplete(settings) {
		if (isEmpty(settings.ip)) {
			hideView(controlsLayout);
			showView(missingIpMessage);
			missingIpMessage.textContent = "Set Ip address of your TV in app settings.";
		} else {
			missingIpMessage.textContent = "Loading remote json config.";
			initRemoteApiFromPreferences(
					function onSuccess() {
						hideView(missingIpMessage);
						showView(controlsLayout);
						onIpSettingsSuccess();
					},
					function onFailure() {
						hideView(controlsLayout);
						showView(missingIpMessage);
						missingIpMessage.textContent = "Remote Json config loading failure.";
					});
		}
	});
}

function openParentAppOnSettingsPage() {
	setScreenToLaunch(SETTINGS_SCREEN);
	tizen.application.launch("Ep7zfE05ck.TvRemote", function() {
		tizen.application.getCurrentApplication().exit();
	});
}
