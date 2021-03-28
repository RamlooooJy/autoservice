import './less/style.less'
import './js/default.js'
import { sendBannerForm, state, burgerToggle, setSlick, pcFrom, worksSelect } from './js/functions.js'

// burger
$('.burger').click(() => {
	burgerToggle()
})

$('.navigation-placeholder').click((item) => {
	burgerToggle()
})








//   //  //  dropdown
$('.dropdown-app-navigation-title').on('click', function() {
	$('.dropdown-app-navigation').toggleClass('dropdown-app-navigation_active')
});
$('.works .dropdown-app-navigation-menu-item').on('click', function() {
	worksSelect(this)
});
$('.dropdown-app-container-all-photos-btn').on('click', function() {
	$('.dropdown-app-container-box').toggleClass('dropdown-app-container-box_enabled')
})








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
})//buttons
$('.people-button .button').on('click', (e) => {
	$('#call_form').arcticmodal()
})
//buttons
$('.banner-item-content-button .button').on('click', (e) => {
	$('#banner_form').arcticmodal()
})

$('.modal-form-cost').on('submit', sendBannerForm)





