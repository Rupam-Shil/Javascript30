const SpeechRecognition = webkitSpeechRecognition;
const SpeechRecognitionEvent = webkitSpeechRecognitionEvent;
const rcrd = document.querySelector('.btn1');
const stop = document.querySelector('.btn2');
const clear = document.querySelector('.clear');
const area = document.querySelector('.translatearea');
const recognition = new SpeechRecognition();
console.log(recognition);
recognition.lang = 'en-US';
rcrd.addEventListener('click', () => {
	recognition.start();
	console.log('Ready');
});
stop.addEventListener('click', () => {
	recognition.stop();
});
recognition.onresult = function (event) {
	let transcript = event.results[0][0].transcript;
	const p = document.createElement('p');
	p.innerText = transcript;
	area.appendChild(p);
};
clear.addEventListener('click', () => {
	area.innerHTML = '';
});
