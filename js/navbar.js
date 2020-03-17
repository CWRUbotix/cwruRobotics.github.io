window.onscroll = function() {f_scroll()};

function f_scroll() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav_logo").style.maxWidth = "80px";
		document.getElementById("nav_name").style.fontSize = "26px";
		document.getElementById("nav_desc").style.fontSize = "0px";
    } else {
        document.getElementById("nav_logo").style.maxWidth = "120px";
		document.getElementById("nav_name").style.fontSize = "30px";
		document.getElementById("nav_desc").style.fontSize = "16px";
    }
}
