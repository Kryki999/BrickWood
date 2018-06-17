function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset;
	var width = window.innerWidth;
	if(ypos > 70 || width < 1200){
		top.style.height = "80px";
		top.style.width = "100%";
		top.style.margin = "0";
	}
	else{
		top.style.height = "70px";
		top.style.width = "75%";
		top.style.marginLeft = "12.5%";
	}
	
}
window.addEventListener("load", Scroll);
window.addEventListener("scroll", Scroll);
window.addEventListener("resize", Scroll);