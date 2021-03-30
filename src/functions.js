export const pcFrom = 1200
export const tabletFrom = 768
const nav = document.querySelector('.navigation')
const burger = document.querySelector('.burger')
const header = document.querySelector('header')
// * global state
export const state = {
	width: window.innerWidth,
	scrolled: false,
	slickPeopleExist: true,
	// headerHide: {
	// 	isHidden: false,
	// 	lastScroll: -1,
	// },
	// + works * * * * * * * * * * * * *
	worksState: {
		selectActive: false,
	},
}



// +  Form banner
export function sendBannerForm (e) {
	e.preventDefault()
	$.arcticmodal('close')
}



// +  toggle
export function burgerToggle () {
	document.body.classList.toggle('stop-scroll')
	nav.classList.toggle('navigation_active')
	burger.classList.toggle('burger_active')
}
export function setSlick (block, params = {}) {
	const extra = {
		infinite: false,
		responsive: [
			{
				breakpoint: 999999,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					centerMode: false,
				},
			},
			{
				breakpoint: pcFrom,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: tabletFrom,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
		],
		...params,
	}
	if (block) {
		block.slick(extra)
	}
}
// * $$$scroll top
document.addEventListener('scroll', onScroll)
// * scroll for title function
function onScroll (e) {
	const container = document.documentElement
	if (container.scrollTop >= 20 && !state.scrolled) {
		header.classList.add('header_scrolled')
		state.scrolled = true
	} else if (container.scrollTop < 20 && state.scrolled) {
		header.classList.remove('header_scrolled')
		state.scrolled = false
	}
	// if (state.headerHide.lastScroll < container.scrollTop && !state.headerHide.isHidden) {
	// 	if (container.scrollTop - state.headerHide.lastScroll >= 10) {
	// 		$('header').addClass('navigation-transparent')
	// 		state.headerHide.isHidden = true
	// 	}
	// }
	// if ((state.headerHide.lastScroll > container.scrollTop && state.headerHide.isHidden)
	// 	|| container.scrollTop === 0) {
	// 	if (container.scrollTop - state.headerHide.lastScroll <= -10 || container.scrollTop === 0) {
	// 		$('header').removeClass('navigation-transparent')
	// 		state.headerHide.isHidden = false
	// 	}
	// }
	// state.headerHide.lastScroll = container.scrollTop
}

// header.addEventListener('mouseenter', () => {
// 	if (state.headerHide.isHidden) {
// 		state.headerHide.isHidden = false
// 		header.classList.remove('navigation-transparent')
// 	}
// })

onScroll()


// + works +  //
export function dropDownClicked (item, event) {
	event && event.stopPropagation()
	if (window.innerWidth >= pcFrom) return
	const nav = $('.dropdown-app-navigation')
	const dropdownNavActive = 'dropdown-app-navigation_active'
	nav.toggleClass(dropdownNavActive)
	state.worksState.selectActive = nav.hasClass(dropdownNavActive)
}
export function worksSelect (clicked) {
	const works = $('.works')[0]
	const SELECTED_CLASS = 'works-container-navigation-item_selected'
	const active = works.querySelector(`.${ SELECTED_CLASS }`)
	if (clicked === active) return
	clicked.classList.add(SELECTED_CLASS)
	active && active.classList.remove(SELECTED_CLASS)
	$('.dropdown-app-navigation-title-label').html(clicked.innerHTML)
}
// ! works ! //
// ? event click on document
document.addEventListener('click', (e) => {
	if (!state.worksState.selectActive) return
	const select = $('.works .dropdown-app-navigation')[0]
	if (!select.contains(e.target)) {
		dropDownClicked()
	}
})
export function goTo (e, element) {
	e.preventDefault()
	console.log(element)
}
