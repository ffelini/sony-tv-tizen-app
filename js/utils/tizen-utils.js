function onBezelRotate(onLeft, onRight) {
	document.addEventListener('rotarydetent', function(e) {
		switch (e.detail.direction) {
		case "CW":
			onRight();
			break;
		case "CCW":
			onLeft();
			break;
		}
	}, false);
}

function scrollPageWithBezel(pageId, step) {
	document.getElementById(pageId).addEventListener('pagebeforeshow',
			function pageScrollHandler(e) {
				var scroller = e.target.querySelector('.ui-scroller');

				onBezelRotate(function onLeft() {
					scroller.scrollTop -= step;
				}, function onRight() {
					scroller.scrollTop += step;
				});
			});
}

function scrollWithBezelAsSnapList(pageId, listId) {
	document.getElementById(pageId).addEventListener('pagebeforeshow', function pageScrollHandler(e) {
		var list = document.getElementById(listId);
		tau.helper.SnapListMarqueeStyle.create(list, {marqueeDelay: 1000});
	});
}