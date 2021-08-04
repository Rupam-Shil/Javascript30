const SECRET_KEY = 'rupam';
const inputArray = [];

document.addEventListener('keyup', (e) => {
	inputArray.push(e.key);
	inputArray.splice(0, inputArray.length - SECRET_KEY.length);
	console.log(inputArray);
	if (inputArray.join('') === SECRET_KEY) {
		console.log('Ding Dong');
	}
});
