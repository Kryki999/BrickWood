function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset;
	var width = window.innerWidth;
	if(width > 1200){
	
	if(ypos > 70){
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
	else{
		top.style.height = "50px";
		top.style.width = "100%";
		top.style.marginLeft = "0";
}
}



window.addEventListener("load", Scroll);
window.addEventListener("scroll", Scroll);
window.addEventListener("resize", Scroll);

$(document).ready(function(){
	$(".yourSlider").nerveSlider({
		sliderWidth: "100%",
		sliderHeight: "500px",
		sliderResizable: true
	});
	$('.offer').hover(function(){
	   $(this).children("img").css('opacity','0.6');
		window.yourGlobalVariable = $(this).html();
		var n = yourGlobalVariable.search("stage1");
		if(n !== -1){
			var topParametr="stage1-append-text";
		}
		var n = yourGlobalVariable.search("stage2");
		if(n !== -1){
			var topParametr="stage2-append-text";
		}
		var n = yourGlobalVariable.search("stage3");
		if(n !== -1){
			var topParametr="stage3-append-text";
		}				
		$(this).append( "<p class='offer-name append-text "+topParametr+"''>Kliknij aby uzyskać więcej informacji</p>");
},		
		function(){ 
	   $(this).children("img").css('opacity','1');
		$('.append-text').remove();
	});
			var width = document.body.clientWidth;
	
});

$(".burger-nav").on("click", function(){
		$("header ol li").toggleClass("open");
	});
