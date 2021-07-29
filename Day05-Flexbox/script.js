const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
	box.addEventListener('click', callMe);
});

function callMe() {
	boxes.forEach((box) => {
		box.classList.remove('active');
	});

	if (this.classList.contains('active')) {
		this.classList.remove('active');
	} else {
		this.classList.add('active');
	}
}
