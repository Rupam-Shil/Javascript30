const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog',
];

const strip = (str) => {
	return str.replace(/^(a |the |an )/i, '').trim();
};
const filterByArray = (arr) => {
	const sortedArr = arr.sort((a, b) => {
		return strip(a) > strip(b) ? 1 : -1;
	});
	return sortedArr;
};

const newArr = filterByArray(bands);
console.log(newArr);
const ul = document.querySelector('ul');
newArr.forEach((elem) => {
	let li = document.createElement('li');
	li.innerHTML = elem;
	ul.appendChild(li);
});
