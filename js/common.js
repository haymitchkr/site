$(function(){
	$('.slider').slick({
		arrows: true,
		fade: true,
		dots: false,
	});
	$('.header-nav__burger').click(function(event) {
		$('.header-nav__burger,.header-nav,.blur-container').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(document).mouseup(function (e){ // событие клика по странице
        if (!$(".header-nav__burger,.header-nav").is(e.target)) { 
            $(".header-nav__burger,.header-nav,.blur-container").removeClass("active");
            $('body').removeClass('lock'); // скрываем блок
        }
    });
	$('.content-nav__burger').click(function(){
		$('.content-nav__burger,.content-nav').toggleClass('active');
	});
	$(document).mouseup(function (e){ // событие клика по странице
        if (!$(".content-nav__items,.content-nav__burger").is(e.target) &&
        	$(".content-nav__items,.content-nav__burger").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".content-nav,.content-nav__burger").removeClass("active");
        }
   });
	$('.portfolio-slider').slick({
			arrows: true,
			fade: true,
			dots: false,
	});
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		draggable: false,
		swipe: false,
		waitForAnimate: false,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  focusOnSelect: true,
	});
	$('.button-share').click(function() {
		$('.share-media,.button-share').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		if (!$('.button-share,.share-media').is(e.target) &&
				$('.button-share,.share-media').has(e.target).length === 0){
					$('.button-share,.share-media').removeClass('active');
		}
	});
});