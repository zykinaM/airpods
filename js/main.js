const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function (el) {
	el.addEventListener('click', open)
})

function open(e) {
	const target = e.currentTarget;
	const btn = target.dataset.button;
	const contentActive = document.querySelectorAll(`.${btn}`);

	chooseColor.forEach(function (el) {
		el.classList.remove('choose-color__btn--active')
	})

	target.classList.add('choose-color__btn--active')

	contentItem.forEach(function (el) {
		el.classList.remove('content-item--active')
	})

	contentActive.forEach(function (el) {
		el.classList.add('content-item--active')
	})

}