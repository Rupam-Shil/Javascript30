/**
 * Part One
 */
// const filterByYear = (arr) => {
// 	return arr.filter((elem) => {
// 		return elem.year > 1500 && elem.year <= 1600;
// 	});
// };
// const final = filterByYear([
// 	{
// 		first: 'Albert',
// 		last: 'Einstein',
// 		year: 1879,
// 		passed: 1955,
// 	},
// 	{
// 		first: 'Isaac',
// 		last: 'Newton',
// 		year: 1643,
// 		passed: 1727,
// 	},
// 	{
// 		first: 'Galileo',
// 		last: 'Galilei',
// 		year: 1564,
// 		passed: 1642,
// 	},
// 	{
// 		first: 'Marie',
// 		last: 'Curie',
// 		year: 1867,
// 		passed: 1934,
// 	},
// 	{
// 		first: 'Johannes',
// 		last: 'Kepler',
// 		year: 1571,
// 		passed: 1630,
// 	},
// 	{
// 		first: 'Nicolaus',
// 		last: 'Copernicus',
// 		year: 1473,
// 		passed: 1543,
// 	},
// 	{
// 		first: 'Max',
// 		last: 'Planck',
// 		year: 1858,
// 		passed: 1947,
// 	},
// 	{
// 		first: 'Katherine',
// 		last: 'Blodgett',
// 		year: 1898,
// 		passed: 1979,
// 	},
// 	{
// 		first: 'Ada',
// 		last: 'Lovelace',
// 		year: 1815,
// 		passed: 1852,
// 	},
// 	{
// 		first: 'Sarah E.',
// 		last: 'Goode',
// 		year: 1855,
// 		passed: 1905,
// 	},
// 	{
// 		first: 'Lise',
// 		last: 'Meitner',
// 		year: 1878,
// 		passed: 1968,
// 	},
// 	{
// 		first: 'Hanna',
// 		last: 'Hammarström',
// 		year: 1829,
// 		passed: 1909,
// 	},
// ]);
// console.log(final);

/**
 * Part Two
 */

// const data = [
// 	{
// 		first: 'Albert',
// 		last: 'Einstein',
// 		year: 1879,
// 		passed: 1955,
// 	},
// 	{
// 		first: 'Isaac',
// 		last: 'Newton',
// 		year: 1643,
// 		passed: 1727,
// 	},
// 	{
// 		first: 'Galileo',
// 		last: 'Galilei',
// 		year: 1564,
// 		passed: 1642,
// 	},
// 	{
// 		first: 'Marie',
// 		last: 'Curie',
// 		year: 1867,
// 		passed: 1934,
// 	},
// 	{
// 		first: 'Johannes',
// 		last: 'Kepler',
// 		year: 1571,
// 		passed: 1630,
// 	},
// 	{
// 		first: 'Nicolaus',
// 		last: 'Copernicus',
// 		year: 1473,
// 		passed: 1543,
// 	},
// 	{
// 		first: 'Max',
// 		last: 'Planck',
// 		year: 1858,
// 		passed: 1947,
// 	},
// 	{
// 		first: 'Katherine',
// 		last: 'Blodgett',
// 		year: 1898,
// 		passed: 1979,
// 	},
// 	{
// 		first: 'Ada',
// 		last: 'Lovelace',
// 		year: 1815,
// 		passed: 1852,
// 	},
// 	{
// 		first: 'Sarah E.',
// 		last: 'Goode',
// 		year: 1855,
// 		passed: 1905,
// 	},
// 	{
// 		first: 'Lise',
// 		last: 'Meitner',
// 		year: 1878,
// 		passed: 1968,
// 	},
// 	{
// 		first: 'Hanna',
// 		last: 'Hammarström',
// 		year: 1829,
// 		passed: 1909,
// 	},
// ];

// let namesArray = data.map((elem) => {
// 	let dummy = [];
// 	dummy.push(`${elem.first} ${elem.last}`);
// 	return dummy;
// });

// console.log(namesArray);

/**
 * Part 3
 */

// data.sort((a, b) => a.year - b.year);
// console.log(data);

/**
 * Part 4
 */

// const totalYear = data.reduce((acc, elem) => {
// 	return acc + (elem.passed - elem.year);
// }, 0);
// console.log(totalYear);

/**
 * Part 5
 */
// const lifeSpanArray = data.map((elem) => {
// 	let result = {};
// 	result.lifeSpan = elem.passed - elem.year;
// 	result.fullName = elem.first + ' ' + elem.last;
// 	return result;
// });
// lifeSpanArray.sort((a, b) => a.lifeSpan - b.lifeSpan);
// console.log(lifeSpanArray);
/**
 * Part 7
 */
// const names = [
// 	'Beck, Glenn',
// 	'Becker, Carl',
// 	'Beckett, Samuel',
// 	'Beddoes, Mick',
// 	'Beecher, Henry',
// 	'Beethoven, Ludwig',
// 	'Begin, Menachem',
// 	'Belloc, Hilaire',
// 	'Bellow, Saul',
// 	'Benchley, Robert',
// 	'Benenson, Peter',
// 	'Ben-Gurion, David',
// 	'Benjamin, Walter',
// 	'Benn, Tony',
// 	'Bennington, Chester',
// 	'Benson, Leana',
// 	'Bent, Silas',
// 	'Bentsen, Lloyd',
// 	'Berger, Ric',
// 	'Bergman, Ingmar',
// 	'Berio, Luciano',
// 	'Berle, Milton',
// 	'Berlin, Irving',
// 	'Berne, Eric',
// 	'Bernhard, Sandra',
// 	'Berra, Yogi',
// 	'Berry, Halle',
// 	'Berry, Wendell',
// 	'Bethea, Erin',
// 	'Bevan, Aneurin',
// 	'Bevel, Ken',
// 	'Biden, Joseph',
// 	'Bierce, Ambrose',
// 	'Biko, Steve',
// 	'Billings, Josh',
// 	'Biondo, Frank',
// 	'Birrell, Augustine',
// 	'Black, Elk',
// 	'Blair, Robert',
// 	'Blair, Tony',
// 	'Blake, William',
// ];

// const sortedByLastName = names.map((elem) => {
// 	return elem.split(', ');
// });
// sortedByLastName[0].sort((a, b) => {
// 	a[1] - b[1];
// });
// console.log(sortedByLastName);
/**
 * Part 8
 */
// const carsArray = [
// 	'car',
// 	'car',
// 	'truck',
// 	'truck',
// 	'bike',
// 	'walk',
// 	'car',
// 	'van',
// 	'bike',
// 	'walk',
// 	'car',
// 	'van',
// 	'car',
// 	'truck',
// ];
// const count = () => {
// 	const cached = {};
// 	return (arr) => {
// 		arr.forEach((elem) => {
// 			if (!cached[elem]) {
// 				cached[elem] = 1;
// 			} else {
// 				cached[elem]++;
// 			}
// 		});
// 		return cached;
// 	};
// };

// const cars = count();
// const final = cars(carsArray);
// console.log(final);
