const root = document.documentElement;

const space = document.querySelector('#space');
const blur = document.querySelector('#blur');
const color = document.querySelector('#color');
const spaceText = document.querySelector('.border-rad-text');
const blurText = document.querySelector('.blur-text');
const colorText = document.querySelector('.border-col-text');

color.addEventListener('change', () => {
	root.style.setProperty('--borer-color', color.value);
	colorText.innerHTML = color.value;
});
space.addEventListener('mousemove', () => {
	root.style.setProperty('--box-border', space.value + 'px');
	spaceText.innerHTML = space.value + 'px';
});
blur.addEventListener('mousemove', () => {
	root.style.setProperty('--box-filter', blur.value + 'px');
	blurText.innerHTML = blur.value + 'px';
});

const a = document.querySelector('.css__code');
console.log(a);
