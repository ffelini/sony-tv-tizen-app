/*global tau */
var sectionChanger,
	pageIndicator,
	pageIndicatorHandler;

var PAGE_REMOTE_HOME = 0,
	PAGE_REMOTE_NAVIGATION = 1,
	PAGE_REMOTE_PLAYBACK = 2,
	PAGE_REMOTE_SWIPE_CONTROL = 3,
	PAGE_SETTINGS = 4;

(function () {
	var page = document.getElementById("home-page"),
		changer = document.getElementById("hsectionchanger"),
		sectionLength = document.querySelectorAll("section").length,
		elPageIndicator = document.getElementById("pageIndicator");

	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	page.addEventListener("pagebeforeshow", function () {
		// make PageIndicator
		pageIndicator = tau.widget.PageIndicator(elPageIndicator, {numberOfPages: sectionLength});
		// make SectionChanger object
		sectionChanger = tau.widget.SectionChanger(changer, {
			circular: true,
			orientation: "horizontal",
			useBouncingEffect: true
		});
	});

	/**
	 * pagehide event handler
	 * Destroys and removes event listeners
	 */
	page.addEventListener("pagehide", function () {
		// release object
		sectionChanger.destroy();
	});

	/**
	 * sectionchange event handler
	 * @param {Event} e
	 */
	pageIndicatorHandler = function (e) {
		pageIndicator.setActive(e.detail.active);
	};

	changer.addEventListener("sectionchange", pageIndicatorHandler, false);
}());