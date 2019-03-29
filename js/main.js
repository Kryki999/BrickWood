function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset;
	var width = window.innerWidth;
    var slid = document.getElementById('container');
	if(width > 1200){
	
	if(ypos > 70){
		top.style.height = "90px";
		top.style.margin = "0";
		}
	else{
		top.style.height = "70px";
	}
	}
	else{
		top.style.height = "60px";
		top.style.width = "100%";
        slid.style.top = "55px";
}
}



window.addEventListener("load", Scroll);
window.addEventListener("scroll", Scroll);
window.addEventListener("resize", Scroll);

$(document).ready(function(){
	$(".yourSlider").nerveSlider({
		sliderWidth: "100%",
		sliderHeight: "550px",
		sliderResizable: true
	});

	
});

$(".burger-nav").on("click", function(){
		$("header ol li").toggleClass("open");
	});
