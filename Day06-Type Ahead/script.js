const api =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let countries = [];
const callApi = async () => {
	const res = await fetch(api);
	const data = await res.json();
	countries = data;
};
callApi();
const ul = document.querySelector('ul');
const input = document.querySelector('input');
input.addEventListener('keydown', () => {
	let cityOrState = input.value.trim();
	let filteredCountry = countries.filter((country) => {
		if (
			country.city.toLowerCase().includes(cityOrState) ||
			country.state.toLowerCase().includes(cityOrState)
		) {
			return country;
		}
	});
	ul.innerHTML = '';
	filteredCountry.forEach((count) => {
		const li = document.createElement('li');
		li.innerHTML = `<div class="left">${count.city}, ${count.state}</div>
		<div class="right">${count.population}</div>`;
		ul.appendChild(li);
	});
});
