(function() {
	var message = document.getElementById("message");

	function init() {
		loadSettings(function onSettingsComplete(settings) {
			if (!isEmpty(settings.ip)) {
				message.innerHTML = "Hello " + settings.ip;
				moveToHomePage();
			} else {
				moveToSettingsPage();
			}
		});
	}

	window.onload = init;
}());