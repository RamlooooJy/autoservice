import './js/default.js'

const state = {
  width: window.innerWidth,
  scrolled: false
}

const header = document.querySelector('header')
const nav = document.querySelector('.navigation')
const burger = document.querySelector('.burger')


function burgerToggle() {
  document.body.classList.toggle('stop-scroll')
  nav.classList.toggle('navigation_active')
  burger.classList.toggle('burger_active')
}

// burger
$('.burger').click(() => {
  burgerToggle()
})

$('.navigation-placeholder').click((item) => {
  burgerToggle()
})


// $$$scroll top
document.addEventListener('scroll', (e) => {
  const container = document.documentElement
  if (container.scrollTop >= 20 && !state.scrolled) {
    header.classList.add('header_scrolled')
    state.scrolled = true
  } else if (container.scrollTop < 20 && state.scrolled) {
    header.classList.remove('header_scrolled')
    state.scrolled = false
  }
})


// init

if (state.width >= 1000) {
  // add when pc
}

window.addEventListener('DOMContentLoaded', (event) => {
  $.datepicker.setDefaults({
    dateFormat: "dd.mm.yy",
    showAnim: "slideDown",
    minDate: new Date(),
    animated: true
  });
  $('.input-datepicker input').datepicker()
  $('.input-phone input').mask('7(000) 000-00-00');
});

//buttons
$('.header-assets-call-button .button').on('click', (e) => {
  $('#call_form').arcticmodal()
})
//buttons
$('.banner-item-content-button .button').on('click', (e) => {
  $('#banner_form').arcticmodal()
})

$('.modal-form-cost').on('submit', sendBannerForm)





