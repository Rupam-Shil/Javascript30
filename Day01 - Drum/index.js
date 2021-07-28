//for click events
const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
	btn.addEventListener('click', click);
});
function click() {
	let audio = new Audio(`./assets/${this.id}.wav`);
	audio.play();
}

const storeMusic = {
	65: 'clap',
	83: 'hihat',
	68: 'kick',
	70: 'openhat',
	71: 'boom',
	72: 'ride',
	74: 'snare',
	75: 'tom',
	76: 'tink',
};
//for press events
document.addEventListener('keydown', press);

function press(e) {
	if (storeMusic[e.keyCode] !== undefined) {
		document.querySelector(`#${storeMusic[e.keyCode]}`).classList.add('active');
		let audioPress = new Audio(`./assets/${storeMusic[e.keyCode]}.wav`);
		audioPress.play();
	} else {
		return;
	}
}
document.addEventListener('keydown', remove);
function remove(e) {
	if (storeMusic[e.keyCode] !== undefined) {
		setTimeout(() => {
			document
				.querySelector(`#${storeMusic[e.keyCode]}`)
				.classList.remove('active');
		}, 100);
	} else {
		return;
	}
}
