const video = document.querySelector('video');
const playPauseBtn = document.querySelector('.play-button');
const volSlider = document.querySelector('.volume');
const speedSlider = document.querySelector('.speed');
const forward10s = document.querySelector('.forward');
const backward10s = document.querySelector('.backward');
const timeline = document.querySelector('.timeline-change');
const timelineChange = document.querySelector('.timeline');

playPauseBtn.addEventListener('click', () => {
	if (playPauseBtn.innerText === '↻') {
		video.currentTime = 0;
		video.play();
		playPauseBtn.innerText = '||';
	} else if (!video.paused) {
		video.pause();
		playPauseBtn.innerText = '►';
	} else {
		video.play();
		playPauseBtn.innerText = '||';
	}
});
volSlider.addEventListener('input', () => {
	video.volume = volSlider.value;
});
speedSlider.addEventListener('input', () => {
	video.playbackRate = speedSlider.value;
});
forward10s.addEventListener('click', () => {
	video.currentTime += 10;
});
backward10s.addEventListener('click', () => {
	video.currentTime -= 10;
});
timelineChange.addEventListener('click', (e) => {
	let getlength = e.offsetX / timelineChange.offsetWidth;
	video.currentTime = video.duration * getlength;
});
setInterval(() => {
	let track = (video.currentTime / video.duration) * 100;
	timeline.style.width = track + '%';
	if (video.currentTime === video.duration) {
		video.pause();
		playPauseBtn.innerText = '↻';
	}
}, 0);
