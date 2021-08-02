const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const label = document.querySelectorAll('label');
checkBoxes.forEach((box) => {
	box.addEventListener('click', strike);
});
let lastChecked = '';
function strike(e) {
	let itemBetween = false;
	if (this.checked) {
		if (e.shiftKey) {
			checkBoxes.forEach((box) => {
				if (box === lastChecked || box === this) {
					itemBetween = !itemBetween;
				}
				if (itemBetween) {
					box.checked = true;
					box.parentNode.classList.add('checked');
				}
			});
		}

		this.parentNode.classList.add('checked');

		lastChecked = this;
	} else {
		this.parentNode.classList.remove('checked');
	}
	console.log(lastChecked);
}
