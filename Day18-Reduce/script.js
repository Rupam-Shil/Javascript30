const lists = [...document.querySelectorAll('li[data-time]')];
const timeArray = lists.map((li) => li.dataset.time);
const secArray = timeArray
	.map((li) => {
		const [min, sec] = li.split(':').map(parseFloat);
		const totalTime = min * 60 + sec;
		return totalTime;
	})
	.reduce((total, reducer) => {
		return total + reducer;
	});
console.log(secArray);
const finalTime = `${parseInt(secArray / 3600)}:${parseInt(
	(secArray % 3600) / 60
)}:${parseInt((secArray % 3600) % 60)}`;
console.log(finalTime);
