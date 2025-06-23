window.addEventListener('scroll', () => {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("nav-logo").style.maxWidth = "80px";
		document.getElementById("nav-title-name").style.fontSize = "26px";
		document.getElementById("nav-title-desc").style.fontSize = "0px";
	}
	else {
		document.getElementById("nav-logo").style.maxWidth = "120px";
		document.getElementById("nav-title-name").style.fontSize = "30px";
		document.getElementById("nav-title-desc").style.fontSize = "16px";
	}
});
