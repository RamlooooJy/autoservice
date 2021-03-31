import { setSlick, setSlickToTab } from "./functions";

export function initAll () {
	$('.input-datepicker input').datepicker()

	$('.input-phone input').mask('8 (000) 000-00-00');

	setSlick($('.js-banner-slide'), {
		responsive: [],
		slidesToShow: 1,
		dots: true,
		dotsClass: 'utils-nav-container',
		appendDots: $('.banner .utils-nav'),
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
	})

	setSlick($('.people-container'), {
		appendArrows: $('.people .slick-arrows-container'),
		arrows: true,
		nextArrow: '<span class="slick-arrows-arrow slick-arrows-arrow-next"></span>',
		prevArrow: '<span class="slick-arrows-arrow slick-arrows-arrow-prev"></span>',
	})

	setSlickToTab(1)
}
