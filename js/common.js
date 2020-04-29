$(function(){
	$('.slider').slick({
		arrows: true,
		fade: true,
		dots: true,
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
		$('.content-nav__burger,.content-nav').toggleClass('active')
	});
	$(document).mouseup(function (e){ // событие клика по странице
        if (!$(".content-nav__items,.content-nav__burger").is(e.target) &&
        	$(".content-nav__items,.content-nav__burger").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".content-nav,.content-nav__burger").removeClass("active");
        }
    });
});