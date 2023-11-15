$(function () {

	$('.bunner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="bunner-section__btn btn-prev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="bunner-section__btn btn-next"><img src="images/arrow-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 970,
				settings: {
					arrows: false
				}
			}
		]
	});


	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().parent().siblings().find('div')).removeClass('tab-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tab-content--active');

		$('.product-slider').slick('setPosition');

	});


	$('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active')
	});


	$('.product-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product-slider__btn btn-prev"><img src="images/arrow-black-left.svg" alt=""></button>',
		nextArrow: '<button class="product-slider__btn btn-next"><img src="images/arrow-black-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					dots: true
				}
			},
			{
				breakpoint: 871,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			},
		]
	});

	$('.filter-style').styler();

	$('.item-drop__title, .filter-moreparams').on('click', function () {
		$(this).toggleClass('item-drop__title--active');
		$(this).next().slideToggle(200);
	});



	$('.js-range-slider').ionRangeSlider({
		type: "double",
		min: 100000,
		max: 500000
	});

	$('.catalog__filter-btngrid').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnlist').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper').removeClass('product-item__wrapper--list');
	});

	$('.catalog__filter-btnlist').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper').addClass('product-item__wrapper--list');
	});

	$(".rate-yo").rateYo({
		rating: 3.6,
		ratedFill: "#1C62CD",
		spacing: "7px",
		normalFill: "#C4C4C4",
		starWidth: "25px"
	});

	$('.menu__btn').on('click', function() {
		$('.menu-mobile__list').toggleClass('menu-mobile__list--active')
	});

	$('.footer__drop-title').on('click',function() {
		$(this).next().slideToggle();
		$(this).toggleClass('footer__drop-title--active');
	});

	$('.aside__btn').on('click',function() {
		$(this).next().slideToggle();
	});

});