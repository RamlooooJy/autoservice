import './less/style.less'
import './less/functions.less'
import './less/functions.less'

const state = {
	width: window.innerWidth,
	scrolled: false
}

const header = document.querySelector( 'header' )
const nav = document.querySelector( '.navigation' )
const burger = document.querySelector( '.burger' )


function burgerToggle () {
	document.body.classList.toggle( 'stop-scroll' )
	nav.classList.toggle( 'navigation_active' )
	burger.classList.toggle( 'burger_active' )
}

// burger
$( '.burger' ).click( () => {
	burgerToggle()
} )

$( '.navigation-placeholder' ).click( ( item ) => {
	burgerToggle()
} )


// $$$scroll top
document.addEventListener( 'scroll', ( e ) => {
	const container = document.documentElement
	if ( container.scrollTop >= 20 && !state.scrolled ) {
		header.classList.add( 'header_scrolled' )
		state.scrolled = true
	} else if ( container.scrollTop < 20 && state.scrolled ) {
		header.classList.remove( 'header_scrolled' )
		state.scrolled = false
	}
} )


// init

if ( state.width >= 1000 ) {
	// add when pc
}


window.addEventListener('DOMContentLoaded', (event) => {

});

window.onload = ()=>{}



function bannerForm (e) {
	e.preventDefault()

	console.log(e.target[0].value)

	$.arcticmodal('close')
}


//buttons
$('.banner-item-content-button .button').on('click', (e)=>{
	$('#global_modal').arcticmodal()
})

$('.modal-form-cost').on('submit', bannerForm)



