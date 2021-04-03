import { state } from "./functions";

const title = $('.types-app-navigation-title-label')
export function typesInit () {
	const nav = $('.types-app-box-container .types-app-box-navigation')
	const scrollContainer = $('.types-app-box-container')
	const blockText = $('.types-app .types-app-block')
	if (!nav.length || !scrollContainer.length) return
	checkBlock(blockText[0])

	const items = Array.from(nav.children())

	items.forEach(i=>{
		i.addEventListener('click', ()=>{
			scrollContainer.scrollTop(i.offsetTop + 1)
		})
	})

	scrollContainer.on('scroll', ()=>{
		changeTitle(items, scrollContainer[0], blockText)
	})
}

function changeTitle(elements, scrollContainer, blockText) {
	const scrolled = scrollContainer.scrollTop
	for (let p = 0; p<elements.length; p++){
		const item = elements[p]
		const nextItem = elements[p+1]
		if(nextItem && nextItem.offsetTop >= scrolled && item.offsetTop <=scrolled){
			console.log(`item-${p}`)
			setItem(p, item)
			break;
		} else if(!nextItem && p===elements.length-1){
			console.log('last')
			setItem(p, item)
			break
		}
	}
	checkBlock(blockText[0])
}

function setItem(id, item) {
	if(state.typesApp.enabledId !== id) {
		title.html(item.innerHTML)
		state.typesApp.enabledId = id
	}
}

function checkBlock (block) {
	if (!block) return
	if (block.scrollHeight !== block.offsetHeight) {
		block.classList.remove('pointer_off')
	} else {
		block.classList.add('pointer_off')
	}
}

