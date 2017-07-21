jQuery(document).ready(function(){

	changeNav();
	animateSkills();
	$(window).on("resize", changeNav);
	$(window).on("scroll", changeNav);
	// $(window).on("scroll", changeNavHeight);
	$(window).on("scroll", animateSkills);

	new WOW().init();

});

function changeNav(){
	if (document.documentElement.clientWidth > 767){
		$(".navbar").addClass("navbar-fixed-top");
		$(".navbar").removeClass("navbar-default");
		if($(this).scrollTop()>0){
			$(".navbar").addClass("navbar-white");
			$(".navbar").removeClass("navbar-transparent");
		}
		else{
			$(".navbar").addClass("navbar-transparent");
			$(".navbar").removeClass("navbar-white");
		}
	}
	else{
		if($(this).scrollTop()>0){
			$(".navbar").addClass("navbar-scrolled");
			$(".navbar").addClass("navbar-fixed-top");
			// $(".navbar").removeClass("navbar-default");
			$(".navbar-brand").removeClass("visible-xs");
			$(".navbar-brand").addClass("hidden-xs");
			document.getElementsByClassName("about")[0].style.paddingTop="80px";
		}
		else {
			$(".navbar").addClass("navbar-default");
			$(".navbar").removeClass("navbar-scrolled");
			$(".navbar-brand").addClass("visible-xs");
			$(".navbar-brand").removeClass("hidden-xs");
			// $(".navbar").removeClass("navbar-fixed-top");
		}
		// TODO: add navbarScrolled
	}
}

function changeNavHeight(){
	var top_offset = $(".main").offset().top;
	if ($(document).scrollTop()<top_offset){
		document.getElementsByClassName("navbar-white")[0].style.paddingBottom=0;
	}
	else{
		document.getElementsByClassName("navbar-white")[0].style.paddingBottom="40px";
	}
}

function animateSkills(){
	var top_offset = $("#skills_section").offset().top;
	var bottom_offset = top_offset-$(window).height()+150;
	if ($(document).scrollTop()>bottom_offset){
		$.getJSON( "skills.json", function(data) {
			$.each(data, function(key, val) {
				$(document.getElementById(key)).animate({width: val+"%", opacity: '1'}, 2000);
			});
		});
	}
}

function openModal() {
	document.getElementById('myModal').style.display = "block";
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var slides = document.getElementsByClassName("mySlides");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	var slide = slides[slideIndex-1];
	if (slide === undefined) {} else {
		console.log(slide);
		slide.style.display = "block";
		slide.addClass("active");
	}
}
