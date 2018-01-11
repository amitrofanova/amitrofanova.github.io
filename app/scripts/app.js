function changeNav(){
	if (document.documentElement.clientWidth > 767){
		$(".navbar").removeClass("navbar-default");
		$(".navbar").removeClass("navbar-scrolled");
		$(".navbar").addClass("navbar-fixed-top");
		$(".navbar-brand").addClass("visible-xs");
		if($(this).scrollTop()>0){
			$(".navbar").removeClass("navbar-transparent");
			$(".navbar").addClass("navbar-white");
		}
		else{
			$(".navbar").removeClass("navbar-white");
			$(".navbar").addClass("navbar-transparent");
		}
		if($(this).scrollTop()>$("#top").height()){
			document.getElementsByClassName("to-top")[0].style.display="block";
		}
		else{
			document.getElementsByClassName("to-top")[0].style.display="none";
		}
	}
	else{
		if($(this).scrollTop()>0){
			$(".navbar-brand").removeClass("visible-xs");
			$(".navbar").addClass("navbar-scrolled");
			$(".navbar").addClass("navbar-fixed-top");
			$(".navbar-brand").addClass("hidden-xs");
			document.getElementsByClassName("about")[0].style.paddingTop="80px";
		}
		else {
			$(".navbar").removeClass("navbar-scrolled");
			$(".navbar-brand").removeClass("hidden-xs");
			$(".navbar-brand").addClass("visible-xs");
			$(".navbar").addClass("navbar-default");
		}
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
		$.getJSON( "assets/data/skills.json", function(data) {
			$.each(data, function(key, val) {
				$(document.getElementById(key)).animate({width: val+"%", opacity: '1'}, 2000);
			});
		});
	}
}


function openModal(modal) {
	$(modal).show();
}


function closeModal() {
	$(this).parent().hide();
}


function showSlides(slides) {

	// const slides = $('.slides');
	var slideIndex = 0;

	function showCurrentSlide(n) {
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		slides[n].style.display = 'block';
	}

	function showPreviousSlide() {
		slideIndex = slideIndex - 1;
		if (slideIndex < 0) {
			slideIndex = slides.length - 1;
		}
		showCurrentSlide(slideIndex);
	}

	function showNextSlide() {
		slideIndex = slideIndex + 1;
		if (slideIndex === slides.length) {
			slideIndex = 0;
		}
		showCurrentSlide(slideIndex);
	}

	showCurrentSlide(0);

	$('.prev').on('click', showPreviousSlide);
	$('.next').on('click', showNextSlide);

}

$(document).ready(function(){

	changeNav();
	animateSkills();
	$(window).on("resize", changeNav);
	$(window).on("scroll", changeNav);
	$(window).on("scroll", animateSkills);

	$('.portfolio__hospital').on('click', function() {
		openModal('#hospital');
		const slides = $('.slider__hospital').children('.slider__item');
		showSlides(slides);
	});

	$('.portfolio__recipes').on('click', function() {
		openModal('#recipes');
		const slides = $('.slider__recipes').children('.slider__item');
		showSlides(slides);
	});

	$('.close').on('click', closeModal);
});
