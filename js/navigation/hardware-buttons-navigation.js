(function() {
	window.addEventListener("tizenhwkey", function(ev) {
		if (ev.keyName === "back") {
			if (window.history.length == 1) {
				try {
					tizen.application.getCurrentApplication().hide();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());