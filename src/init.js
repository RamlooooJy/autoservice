import { setSlick, setSlickToTab, state } from "./functions";
import { worksInit } from "./worksClick";
import { typesInit } from "./typesScrollBehavior";

const api = '45b5f40f-53bc-4532-82ee-2b691cb380d1'

export function initAll () {
	window.requestAnimationFrame(()=>{
		document.body.style.opacity = ''
	})

	const banner = $('.js-banner-slide')
	banner.on('init', ()=>$('body').addClass('body_vissible'))

	setSlick(banner, {
		responsive: [],
		slidesToShow: 1,
		dots: true,
		dotsClass: 'utils-nav-container',
		appendDots: $('.banner .utils-nav'),
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		pauseOnHover: false
	})

	$('.input-phone input').mask('8 (000) 000-00-00');

	setSlick($('.people-container'), {
		appendArrows: $('.people .slick-arrows-container'),
		arrows: true,
		focusOnSelect: true,
		nextArrow: '<span class="slick-arrows-arrow slick-arrows-arrow-next"></span>',
		prevArrow: '<span class="slick-arrows-arrow slick-arrows-arrow-prev"></span>',
	})

	const item = $(`.works .works-container-content-box[data-box]:first-child`)
	if(item.length) {
		state.worksState.selectedMenuItem = item.data().box || 1
		setSlickToTab(state.worksState.selectedMenuItem)
	}

	$('.input-datepicker input').datepicker()

	typesInit()

	worksInit()
}
