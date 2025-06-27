const MINIMIZE_HEIGHT = 100
const MAXIMIZE_HEIGHT = 5

let usesBody = false;
let scrollElementKnown = false;

window.addEventListener('scroll', () => {
	if (!scrollElementKnown) {
		if (document.body.scrollTop > 0) {
			usesBody = true;
			scrollElementKnown = true;
		}
		else if (document.documentElement.scrollTop > 0) {
			usesBody = false;
			scrollElementKnown = true;
		}
	}
	else {
		if (getScrollTop(usesBody) > MINIMIZE_HEIGHT) {
			document.getElementById("nav-logo").style.maxWidth = "80px";
			document.getElementById("nav-title-name").style.fontSize = "26px";
			document.getElementById("nav-title-desc").style.display = "none";
		}
		else if (getScrollTop(usesBody) <= MAXIMIZE_HEIGHT) {
			document.getElementById("nav-logo").style.maxWidth = "120px";
			document.getElementById("nav-title-name").style.fontSize = "30px";
			document.getElementById("nav-title-desc").style.display = "inline-block";
		}
	}
});

window.addEventListener('DOMContentLoaded', () => {
	// TODO: Why the heck do we not start at the top of the page?
	window.scroll(0, 0);
});

function getScrollTop(usesBody) {
	if (usesBody) {
		return document.body.scrollTop;
	}
	else {
		return document.documentElement.scrollTop;
	}
}