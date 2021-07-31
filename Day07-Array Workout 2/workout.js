/**
 * Ex 1
 */

// const ageData = [
// 	{
// 		name: 'Wes',
// 		year: 1988,
// 	},
// 	{
// 		name: 'Kait',
// 		year: 1986,
// 	},
// 	{
// 		name: 'Irv',
// 		year: 1970,
// 	},
// 	{
// 		name: 'Lux',
// 		year: 2015,
// 	},
// ];

// const date = new Date();
// const year = date.getFullYear();
// const check = (age) => {
// 	return year - age.year >= 19;
// };
// const result = ageData.some(check);

// const result1 = ageData.every(check);

// console.log(result);
// console.log(result1);

/**
 * Ex2
 */
// ageData.forEach((age) => {
// 	age.age = year - age.year;
// });
// console.log(ageData);

/**
 * Part 3
 */
const idData = [
	{
		text: 'Love this!',
		id: 523423,
	},
	{
		text: 'Super good',
		id: 823423,
	},
	{
		text: 'You are the best',
		id: 2039842,
	},
	{
		text: 'Ramen is my fav food ever',
		id: 123523,
	},
	{
		text: 'Nice Nice Nice!',
		id: 542328,
	},
];
const ID = 823423;
const toFind = idData.filter((data) => {
	return data.id === ID;
});

console.log(toFind);
