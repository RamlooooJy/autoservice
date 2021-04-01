import { allPhotoContainerToggle, state } from "./functions";

const wokrsStack = document.querySelector('#workStack');

export function worksInit () {
	window.requestAnimationFrame(() => {
		const items = Array.from(wokrsStack.querySelectorAll('.works-container-content-preview'))
		if (!items.length) return

		state.worksState.works = items.reduce((worksArray, work) => {
			const [ menuId, activeItemId ] = work.dataset.workItem.split('.')
			return [ ...worksArray, { menuId, activeItemId } ]
		}, [])

		const allPhotos = document.querySelectorAll('.works-container-content-photos-item[data-photo-id]')

		allPhotos.forEach(photo => photo.addEventListener('click', (e) => {
			let element = e.currentTarget
			changeActiveElement(element.dataset && Number((element.dataset.photoId || -1)))
		}))
	})
}

export function changeActiveElement (id) {
	const currentTab = state.worksState.selectedMenuItem
	const box = document.querySelector(`.works-container-content-box[data-box="${ currentTab }"]`)
	const firstElement = box.children[0]
	const searchContentBox = `${ currentTab }.${ id }`
	if (searchContentBox === state.worksState.selectedWork) {
		return
	}

	box.querySelector('.works-container-content-preview').remove()
	const elementCopy = getElementFromImageStake(searchContentBox)
	firstElement.insertAdjacentElement('afterend', elementCopy)
	if(state.worksState.allPhotosActive) {
		allPhotoContainerToggle()
	}

}

function getElementFromImageStake (workItemId) {
	state.worksState.selectedWork = workItemId
	const domQueryString = `[data-work-item="${workItemId}"]`
	const item = wokrsStack.querySelector(domQueryString)
	return item.cloneNode(true)
}

