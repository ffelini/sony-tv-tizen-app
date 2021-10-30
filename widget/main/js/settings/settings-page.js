(function() {
	var ip_input = document.getElementById("ip_input");
	var save_button = document.getElementById("save_button");
	
	function init() {
		loadSettings(function onSettingsComplete(settings) {
			setupSettingsPage(settings)
		});
	}

	function setupSettingsPage(settings) {
		ip_input.value = settings ? settings.ip : "192.168.0.";
		save_button.addEventListener("click", onSaveClick);
	}

	function onSaveClick() {
		saveSettings(ip_input.value, function onComplete() {
			moveToStartupPage();
		})
	}

	function saveSettings(ip, onComplete) {
		settings = {};
		settings.ip = ip;
		tizen.preference.setValue(PREFERENCE_IP_KEY, ip);
		onComplete();
	}

	scrollWithBezelAsSnapList('main', 'list-view');

	window.addEventListener("tizenhwkey", function(ev) {
		if (ev.keyName === "back") {
			window.history.back();
		}
	});

	window.onload = init;
}());