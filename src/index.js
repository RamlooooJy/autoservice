import './js/jquery-3.6.0.min.js'
import './less/style.less'
import './default.js'
import {
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
// +  Form banner
// export function sendAnyForm (e) {
// 	e.preventDefault()
	// setTimeout(()=>{
		// $.arcticmodal('close')
		// $('#bad_request').arcticmodal()
	// }, 100)
// }
//? submit banner form
// $('.modal-form-cost').on('submit', sendAnyForm)
// $('#сostAssessment').on('submit', sendAnyForm)
// $('#enroll').on('submit', sendAnyForm)


//! smooth go to section
const link = $('.simple-link')
link && link.on('click', goTo)





//+ внутренний код
////? submit banner form
// $('form').on('submit',  sendAnyForm)
// // $('#call_form_team_form').on('submit',  sendAnyForm)
// // $('#price_form_banner').on('submit', sendAnyForm)
// // $('#сostAssessment').on('submit', sendAnyForm)
// // $('#enroll').on('submit', sendAnyForm)
//
// function sendAnyForm (e) {
// 	e.preventDefault()
// 	var form = this;
//
// 	const target = e.currentTarget
// 	const inputs = Array.from(target.elements).filter(a => a.tagName.toLowerCase() !== 'button')
// 	const fields = inputs.reduce((acc, a) => {
// 		if(a.value == "on" || a.value == '') return acc;
// 		if(a.name == 'date' && a.value== '') acc['date'] = new Date().toLocaleDateString();
// 		acc[a.name] = a.value.trim();
// 		return acc
// 	}, {})
//
// 	fields.title = target.name
// 	fields.formId = target.id
// 	fields.sendto = WP_GLOBAL.sendto.map(a=>a.mail)
//
// 	var jqxhr = $.post( "../send.php", fields)
// 		.done(function(data) {
// 			success(true, inputs)
// 		})
// 		.fail(function() {
// 			success(false, inputs)
// 		})
// 		.always(function(data) {
// 			// console.log(data)
// 		});
// }
//
// function success (isOk, inputs) {
// 	  //end
// 		inputs && inputs.forEach(a => {
// 			if (a.type.toLowerCase() !== 'checkbox') a.value = ''
// 		})
// 		$.arcticmodal('close')
// 		window.requestAnimationFrame(()=>{
// 			isOk ?
// 			$('#good_request').arcticmodal():
// 			$('#bad_request').arcticmodal();
// 		})
// }
//
// // Дождёмся загрузки API и готовности DOM.
// if(WP_GLOBAL.templateType.indexOf('page-policy') === -1) {
// 	ymaps.ready(ggggg);
// 	function ggggg () {
// 		var myMap;
// 		const coords = WP_GLOBAL.coord.split(',').map(a=>Number(a));
// 		// Создание экземпляра карты и его привязка к контейнеру с
// 		// заданным id ("map").
// 		myMap = new ymaps.Map('map', {
// 				// При инициализации карты обязательно нужно указать
// 				// её центр и коэффициент масштабирования.
// 				center: coords, // Москва
// 				zoom: 17
// 		}, {
// 				searchControlProvider: 'yandex#search'
// 		});
//
// 		myMap.geoObjects.add(new ymaps.Placemark(coords, {
// 				balloonContent: `<a class='simple_link' style='font-size: 20px; max-width: 100px; word-break: break-word'>${WP_GLOBAL.address}</a>`
// 		}, {
// 			// iconLayout: 'default#image',
// 			// iconImageHref: `${WP_GLOBAL.siteUrl}/assets/img/fav.png`,
// 				preset: 'islands#blueAutoIcon',
// 				iconContent: `${WP_GLOBAL.siteUrl}/assets/img/fav.png`
// 		}))
// 		myMap.behaviors
// 		.disable(['scrollZoom'])
//
// 		// Отслеживаем скролл мыши на карте, чтобы показывать уведомление
// 		// Обрабатываем нажатие на Ctrl
// 		$(document).keydown(function(e) {
// 			if ([91, 17, 93].includes(e.which) && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
// 					ctrlKey = true;
// 					myMap.behaviors.enable('scrollZoom');
// 			}
// 		});
// 		$(document).keyup(function(e) { // Ctrl не нажат: выключаем масштабирование мышью
// 			if ([91, 17, 93].includes(e.which)) {
// 					ctrlKey = false;
// 					myMap.behaviors.disable('scrollZoom');
// 			}
// 		});
// 		myMap.events.add(['wheel', 'mousedown'], function(e) {
// 			if (e.get('type') == 'wheel') {
// 					if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
// 							$('#ymap_ctrl_display').fadeIn(300);
// 							ctrlMessVisible = true;
// 							clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
// 							timer = setTimeout(function() {
// 									$('#ymap_ctrl_display').fadeOut(300);
// 									ctrlMessVisible = false;
// 							}, 1500);
// 					}
// 					else { // Ctrl нажат, скрываем сообщение
// 							$('#ymap_ctrl_display').fadeOut(100);
// 					}
// 			}
// 			if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
// 					$('#ymap_ctrl_display').fadeOut(100);
// 			}
// 		});
// 	}
//
// }
//
// // additional
// setTimeout(()=>{
// 	$('body').addClass('body_vissible');
// }, 2000)
//
// let ctrlKey = false;
// let ctrlMessVisible = false;
// let timer;
