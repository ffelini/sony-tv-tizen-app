(function() {
	function init() {
		initRemoteApi(function onRemoteApiComplete() {
			loadSettings(function onSettingsComplete(settings) {
				setupRemoteButtons();
			});
		});
	}

	window.onload = init;
}());
