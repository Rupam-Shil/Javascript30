const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const sizes = {};
const num = 100;

container.addEventListener('mousemove', (e) => {
	sizes.width = e.clientX / container.offsetWidth - 0.5;
	sizes.height = e.clientY / container.offsetHeight - 0.5;
	h1.style.textShadow = `${num * sizes.width}px ${
		num * sizes.height
	}px 0 rgba(255, 123, 0, 0.7),${-num * sizes.width}px ${
		-num * sizes.height
	}px 0 rgba(63, 127, 191, 0.7),${-num * sizes.height}px ${
		-num * sizes.width
	}px 0 rgba(62, 187, 62, 0.7),${num * sizes.height}px ${
		num * sizes.width
	}px 0 rgba(187, 62, 62, 0.7)`;
});
