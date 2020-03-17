function load(){
	var off = document.getElementById("nav").clientHeight;
	var off2 = off + 200;
	document.getElementById("home").style.paddingTop = off + "px";
	document.getElementById("motto").style.top = off2 + "px";
	document.getElementById("join_btn").style.top = (off2+document.getElementById("motto").clientHeight+50) + "px";
	var gif = document.getElementById('home').getElementsByTagName("img")[0];
	//gif.style.marginLeft = -((gif.clientWidth-screen.width)/2) + "px";
}
