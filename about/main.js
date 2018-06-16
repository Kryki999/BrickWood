function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset;
	console.log($(window).width());
	
	if(ypos > 70){
		top.style.height = "100px";
		top.style.width = "100%";
		top.style.margin = "0";
	}
	else{
		top.style.height = "70px";
		top.style.width = "75%";
		top.style.marginLeft = "12.5%";
	}
	
}

$(document).ready(function(){
	window.addEventListener("scroll", Scroll);
});