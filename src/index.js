import './less/style.less'
import './default.js'
import {
	sendAnyForm,
	burgerToggle,
	worksSelect,
	dropdownMenuToggle,
	allPhotoContainerToggle,
	goTo,
} from './functions.js'
import { initAll } from "./init";

// burger
const burger = $('.burger')
burger && burger.click(() => {
	burgerToggle()
})

const nav = $('.navigation-placeholder')
nav && nav.click((item) => {
	burgerToggle()
})

const logo = $('.logo-link')
logo && logo.click(function(e) {
	const href = this.href
	if (location.href === href) {
		e.preventDefault()
		document.documentElement.scrollTop = 0
	}
})


//?   //  //  dropdown
const drop = $('.dropdown-app-navigation-title')
drop && drop.on('click', function(event) {
	dropdownMenuToggle(this, event)
});
//! dropdown item click
const worksNavItem = $('.works .dropdown-app-navigation-menu-item')
worksNavItem && worksNavItem.on('click', function(ev) {
	worksSelect(this, ev)
	dropdownMenuToggle(this, ev)
});
//!show/hide photos on low dimensions
const allPhoto = $('.dropdown-app-container-all-photos-btn')
allPhoto && allPhoto.on('click', function() {
	allPhotoContainerToggle()
})
//?	//	// works

//+ Mount behavior for JQuery
window.addEventListener('DOMContentLoaded', (event) => {

	initAll()
});

//!buttons
$('.header-assets-call-button .button').on('click', (e) => {
	$('#call_form').arcticmodal()
})//!buttons
$('.people-button .button').on('click', (e) => {
	$('#call_form').arcticmodal()
})
//!buttons
$('.banner-item-content-button .button').on('click', (e) => {
	$('#banner_form').arcticmodal()
})
//? submit banner form
$('.modal-form-cost').on('submit', sendAnyForm)
$('#сostAssessment').on('submit', sendAnyForm)
$('#enroll').on('submit', sendAnyForm)


//! smooth go to section
const link = $('.simple-link')
link && link.on('click', goTo)
