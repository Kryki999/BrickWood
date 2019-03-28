function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset;
	var width = window.innerWidth;
	if(ypos > 70 || width < 1200){
		if(width < 950){
		top.style.height = "50px";
		top.style.width = "100%";
		top.style.margin = "0";
		}
		else{
		top.style.height = "80px";
		top.style.width = "100%";
		top.style.margin = "0";
		}
	}
	else{
		top.style.height = "70px";
		top.style.width = "85%";
		top.style.marginLeft = "7.5%";
	}
	
}
window.addEventListener("load", Scroll);
window.addEventListener("scroll", Scroll);
window.addEventListener("resize", Scroll);

$(".burger-nav").on("click", function(){
		$("header ol li").toggleClass("open");
	});