const imgs = document.querySelectorAll('img');

document.addEventListener('scroll', (e) => {
	imgs.forEach((img) => {
		let trigger = window.scrollY + window.innerHeight - img.height / 3;
		let heightAtTop = img.offsetTop;
		if (trigger > heightAtTop) {
			img.classList.add('active');
		}
	});
});
