export const pcFrom = 1200
export const tabletFrom = 768
const nav = document.querySelector('.navigation')
const burger = document.querySelector('.burger')
const header = document.querySelector('header')
// * global state
export const state = {
	isWide: window.innerWidth >= pcFrom,
	scrolled: false,
	headerHide: {
		isHidden: false,
		lastScroll: -1,
	},
	// + works * * * * * * * * * * * * *
	worksState: {
		selectActive: false,
		allPhotosActive: false,
		selectedMenuItem: 1,
		mountedIds: [],
		selectedWork: '1.1',
	},
	typesApp: {
		enabledId: 0
	}
}


// +  Form banner
export function sendAnyForm (e) {
	e.preventDefault()
	const inputs = Array.from(this.elements).filter(a => a.tagName.toLowerCase() !== 'button')
	const fields = inputs.reduce((acc, a) => {
		acc[a.name] = a.value;
		return acc
	}, {})

	console.log(fields)

	inputs.forEach(a => {
		if (a.type.toLowerCase() !== 'checkbox') a.value = ''
	})
	$.arcticmodal('close')
}
// +  toggle menu
export function burgerToggle () {
	document.body.classList.toggle('stop-scroll')
	nav.classList.toggle('navigation_active')
	burger.classList.toggle('burger_active')
}
// + slick
export function setSlick (block, params = {}) {
	const extra = {
		infinite: false,
		arrows: false,

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
	if (block.length) {
		block.slick(extra)
	}
}
// * $$$scroll top
document.addEventListener('scroll', onScroll)
// * scroll for title function
function onScroll (e) {
	if (!header) return
	const container = document.documentElement
	if (container.scrollTop >= 20 && !state.scrolled) {
		header.classList.add('header_scrolled')
		state.scrolled = true
	} else if (container.scrollTop < 20 && state.scrolled) {
		header.classList.remove('header_scrolled')
		state.scrolled = false
	}

	if (state.headerHide.lastScroll < container.scrollTop && !state.headerHide.isHidden) {
		if (container.scrollTop - state.headerHide.lastScroll >= 10) {
			$('header').addClass('navigation-transparent')
			state.headerHide.isHidden = true
		}
	}
	if ((state.headerHide.lastScroll > container.scrollTop && state.headerHide.isHidden)
		 || container.scrollTop === 0) {
		if (container.scrollTop - state.headerHide.lastScroll <= -10 || container.scrollTop === 0) {
			$('header').removeClass('navigation-transparent')
			state.headerHide.isHidden = false
		}
	}
	state.headerHide.lastScroll = container.scrollTop
}

// header.addEventListener('mouseenter', () => {
// 	if (state.headerHide.isHidden) {
// 		state.headerHide.isHidden = false
// 		header.classList.remove('navigation-transparent')
// 	}
// })

onScroll()


// + works +  //
export function dropdownMenuToggle (elem, event) {
	// * close dropdown
	event && event.stopPropagation()
	if (window.innerWidth >= pcFrom) return
	const nav = $('.dropdown-app-navigation')
	const dropdownNavActive = 'dropdown-app-navigation_active'
	nav.toggleClass(dropdownNavActive)
	state.worksState.selectActive = nav.hasClass(dropdownNavActive)
}
export function worksSelect (clicked, e) {
	const works = $('.works')[0]
	const SELECTED_CLASS = 'works-container-navigation-item_selected'
	const active = works.querySelector(`.${ SELECTED_CLASS }`)
	if (clicked === active) return
	clicked.classList.add(SELECTED_CLASS)
	active && active.classList.remove(SELECTED_CLASS)
	$('.dropdown-app-navigation-title-label').html(clicked.innerHTML)
	setActiveWorksBox(Number(clicked.dataset.nav))
}
export function allPhotoContainerToggle (e) {
	state.worksState.allPhotosActive = !state.worksState.allPhotosActive
	$('.dropdown-app-container-box').toggleClass('dropdown-app-container-box_enabled')
}
function setActiveWorksBox (index) {
	const ENABLED_CLASS = 'works-container-content-box_enabled'
	const current = $(`.${ ENABLED_CLASS }`)
	if (!current.length || current.data().box === index) return
	const box = $(`[data-box="${ index }"]`)
	if (!box.length) return
	current.removeClass(ENABLED_CLASS)
	box.addClass(ENABLED_CLASS)
	state.worksState.selectedMenuItem = index
	window.requestAnimationFrame(() => {
		setSlickToTab(index)
	});
}
export function setSlickToTab (index) {
	if (!state.worksState.mountedIds.includes(index)) {
		// const tabContent = $(`.works-container-content-box[data-box=${ index }]`)
		if (window.innerWidth > pcFrom) {
			setSlick($(`.works-container-content-box[data-box=${ index }] .js-slick-photos`), {
				responsive: [],
				slidesToShow: 1,
				dots: true,
				dotsClass: 'utils-nav-container',
				appendDots: $(`.works-container-content-box[data-box=${ index }] .works-utils`),
			})
		}

		state.worksState.mountedIds.push(Number(index))
	}
}

// ! works ! //


// ? event click on document
document.addEventListener('click', (e) => {
	if (!state.worksState.selectActive) return
	const select = $('.works .dropdown-app-navigation')[0]
	if (!select.contains(e.target)) {
		dropdownMenuToggle()
	}
})

export function goTo (e) {
	const link = e.currentTarget
	if (link && link.href.indexOf('/#') !== -1) {
		e.preventDefault()
		const index = link.href.indexOf('/#') + 2
		const blockId = link.href.slice(index)
		blockId && scrollToTarget($(`#${ blockId }`))
	}
}
function scrollToTarget (target) {
	const headerHeight = $('header').height()
	if (target.length) {
		if ($('.navigation_active').length) burgerToggle()
		const section = target[0]
		if (!section) return
		const boundTop = section.getBoundingClientRect().top
		const documentScrolledHeight = document.documentElement.scrollTop
		if (window.innerWidth >= 1200 && window.innerHeight <= 700) {
			if (boundTop - headerHeight >= 0) {
				document.documentElement.scrollTop = boundTop + documentScrolledHeight
			} else {
				document.documentElement.scrollTop = boundTop + documentScrolledHeight - headerHeight
			}
		} else {
			document.documentElement.scrollTop = boundTop + documentScrolledHeight - headerHeight
		}
	}
}
