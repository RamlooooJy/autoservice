import './less/style.less'
import './js/default.js'
import {sendBannerForm, state, burgerToggle, setSlick} from './js/functions.js'

// burger
$('.burger').click(() => {
  burgerToggle()
})

$('.navigation-placeholder').click((item) => {
  burgerToggle()
})


// ? APP init
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
  $('.input-phone input').mask('8 (000) 000-00-00');
  setSlick($('.people-container'), {})
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





