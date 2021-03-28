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
	// + works * * * * * * * * * * * * *
	worksState : {
		selectActive: false
	}
}


// +  Form banner
export function sendBannerForm(e) {
  e.preventDefault()
  $.arcticmodal('close')
}

// +  toggle
export function burgerToggle() {
  document.body.classList.toggle('stop-scroll')
  nav.classList.toggle('navigation_active')
  burger.classList.toggle('burger_active')
}

export function setSlick(block, params = {}) {
  const extra = {
    infinite: false,
    responsive: [
      {
        breakpoint: 999999,
        settings: "unslick"
      },
      {
        breakpoint: pcFrom,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          slidesToScroll: 1,
          variableWidth: true,
        }
      },
      {
        breakpoint: tabletFrom,
        settings: {
					slidesToShow: 1,
					centerMode:true,
					centerPadding: '25px',
					slidesToScroll: 1,
					variableWidth: true,
        }
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
}
onScroll()



// + works +  //
export function dropDownClicked (item, event) {
	event && event.stopPropagation()
	const dropdownNavActive = 'dropdown-app-navigation_active'
	$('.dropdown-app-navigation').toggleClass(dropdownNavActive)

	const isOpened = $('.dropdown-app-navigation').hasClass(dropdownNavActive)

	state.worksState.selectActive = isOpened
}
export function worksSelect (clicked) {
	$('.dropdown-app-navigation').toggleClass('dropdown-app-navigation_active')
	const SELECTED_CLASS = 'dropdown-app-navigation-menu-item_selected'
	const active = document.querySelector(`.${SELECTED_CLASS}`)
	clicked.classList.add(SELECTED_CLASS)
	active.classList.remove(SELECTED_CLASS)
	$('.dropdown-app-navigation-title-label').html(clicked.innerHTML)
}
// ! works ! //


// ? event click on document
document.addEventListener('click', (e)=>{
	if(!state.worksState.selectActive) return
	const select = $('.works .dropdown-app-navigation')[0]
	if(!select.contains(e.target)) {
		dropDownClicked()
	}
})
