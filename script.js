// to check if the specific method mutates the array or not: 
// https://doesitmutate.xyz/

// map - changes every element of the array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const nums = [1, 2, 3, 4, 5];

const doubles = nums.map(function (num) {
	// console.log('element: ', num);
	// console.log('index: ', i);
	// console.log('array: ', arr);
	return num * 2
})
// console.log(doubles)

function myMap(arr, callback) {
	let newArr = [];
	for (let el of arr) {
		const changedEl = callback(el)
		newArr.push(changedEl);
	}
	return newArr
}

// console.log(myMap)

const resOfMyMap = myMap(nums, function (num) {
	return num * 3
})
// console.log(resOfMyMap)

const names = ['john', 'paul', 'george'];
const prefixed = names.map(function (name) {
	return 'mr ' + name
});
console.log(prefixed);

const nums2 = [2, 4, 6, 8, 10];

// map over nums 2 and create a 
// new array with then added to every number

const plusTen = nums2.map(function (num) {
	return num + 10
})
console.log(plusTen)


console.clear();

const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65
	},
	{
		name: "Claudia Lopez",
		firstProject: 45,
		secondProject: 95
	},
	{
		name: "Carolina Perez",
		firstProject: 85,
		secondProject: 72,
		final: 23
	}
];


// 1. map over students and create an array containing only the names 
// ['Tony Parker', 'Marc Barchini', etc]

const onlyNames = students.map(function (student) {
	return student.name
})

console.log(onlyNames)

// 2. use the students array and create a new array that contains 
// objects in this format : 
// { name: <name of the student, projects: <sum of the projects>}

const projectSums = students.map(function (student) {
	return {
		name: student.name,
		projects: student.firstProject + student.secondProject
	}
})
console.log(projectSums)

console.clear();

// reduce - reducing (turning) an array into one value

const nums3 = [2, 4, 6];

const sum = nums3.reduce(function (accumulator, currentValue) {
	// console.log('accumulator: ', accumulator)
	// console.log('currentValue: ', currentValue)
	return accumulator + currentValue
})

// console.log(sum)

const words = ['foo', 'barr', 'bazzz'];

const wordsSum = words.reduce(function (accumulator, currentValue, i) {
	// console.log('accumulator: ', accumulator)
	// console.log('currentValue: ', currentValue)

	return accumulator + currentValue.length
}, 0)

console.log(wordsSum)

console.clear();
const people = [
	{ name: "Candice", age: 25 },
	{ name: "Tammy", age: 30 },
	{ name: "Allen", age: 49 },
	{ name: "Nettie", age: 21 },
	{ name: "Stuart", age: 17 }
];

// use reduce to sum up all the ages in the array
const ages = people.reduce(function (acc, val) {
	console.log(acc)
	console.log(val)
	return acc + val.age
}, 0)

console.log(ages)
console.clear();

const product = {
	name: "AmazonBasics Apple Certified Lightning to USB Cable",
	price: 7.99,
	manufacter: "Amazon",
	reviews:
		[
			{
				user: "Pavel Nedved",
				comments: "It was really usefull, strongly recommended",
				rate: 4
			},
			{
				user: "Alvaro Trezeguet",
				comments: "It lasted 2 days",
				rate: 1
			},
			{
				user: "David Recoba",
				comments: "Awesome",
				rate: 5
			},
			{
				user: "Jose Romero",
				comments: "Good value for money",
				rate: 4
			},
			{
				user: "Antonio Cano",
				comments: "It broked really fast",
				rate: 2
			},
		]
}

// sum up all the rates of this product using reduce
// console.log(product.reviews)
const sumRates = product.reviews.reduce(function (acc, val) {
	return acc + val.rate
}, 0)
console.log(sumRates);

console.clear();

// filter - iterates over the array and returns a new array 
// containing all the elements that match the provided function



const nums4 = [1, 2, 3, 4, 5, 6, 7, 8]
const evens = nums4.filter(function (num) {
	if (num % 2 === 0) {
		return true
	} else {
		return false
	}
	// return num % 2 === 0
});
console.log(evens)

const largerThanThree = nums4.filter(function (num) {
	// if (num > 3) {
	// 	return true
	// } else {
	// 	return false
	// }
	return num > 3
})
console.log(largerThanThree)

// function myFilter(arr, shouldBeAdded) {
// 	const filtered = []
// 	for (let el of arr) {
// 		if (shouldBeAdded(el)) {
// 			filtered.push(el);
// 		}
// 	}
// 	return filtered
// }
// console.log(myFilter(nums4, function (num) {
// 	return num === 4
// }))

const places = [
	{
		title: "Awesome Suite 20' away from la Rambla",
		price: 200,
		type: "Private Room",
		pool: true,
		garage: false
	},
	{
		title: "Private apartment",
		price: 190,
		type: "Entire Place",
		pool: true,
		garage: true
	},
	{
		title: "Apartment with awesome views",
		price: 400,
		type: "Entire Place",
		pool: false,
		garage: false
	},
	{
		title: "Apartment in la Rambla",
		price: 150,
		type: "Private Room",
		pool: false,
		garage: true
	},
	{
		title: "Comfortable place in Barcelona´s center",
		price: 390,
		type: "Entire place",
		pool: true,
		garage: true
	}
];
// 1. filter all with a price above 300
const above300 = places.filter(function (place) {
	if (place.price > 300) {
		return true
	} else {
		return false
	}
	// return place.price > 300
})
console.log(above300)

// 2. create an array that contains only the titles 
// of the places that have a pool
function getTitlesOfPlacesWithPool(arr) {
	// filter for the places with a pool
	const withPool = arr.filter(function (el) {
		if (el.pool) {
			return true
		} else {
			return false
		}
		// return el.pool
	})
	// map to get only the titles	
	const onlyTitles = withPool.map(function (place) {
		return place.title
	})
	return onlyTitles
}
console.log(getTitlesOfPlacesWithPool(places))

console.clear();

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter(birds) {

	const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	// return an array containing all of the strings 
	// in the input array except those that match strings in geese
	const filtered = birds.filter(function (bird) {
		// if (geese.indexOf(bird) === - 1) {
		// 	return true
		// }
		// if (!geese.includes(bird)) {
		// 	return true
		// }
		return !geese.includes(bird)
	})
	return filtered
};

const res = gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
console.log(res)
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]


// reverse() - reverses an array

const nums5 = [2, 4, 6, 8, 10];
const str = 'hello world';
nums5.reverse();
console.log(nums5)

// change a string to an array
// split
const arr = str.split('')
arr.reverse()
// change an array to a string
// join
const reversedStr = arr.join('')
console.log(reversedStr)
// str.reverse()

// const w = 'katka';
// // console.log(w.split('').join('%'))

// nice trick with split

const str2 = 'abdcabde';
// use split(<someChar>).length - 1 - to get the number
// of occurences of that char in the string
const occurences = str2.split('d').length - 1;
console.log(occurences);

// sort

const nums6 = [23, 45, 7, 12];
const sorted = nums6.sort(function (a, b) {
	// this sorts descending
	return b - a
	// this sorts ascending
	// return a - b
	// if (b < a) {
	// 	return 7
	// }
	// if (a < b) {
	// 	return - 4
	// }
})
console.log(sorted)

console.clear();

const reviews = [
	{
		name: 'foo',
		rate: 9,
		score: 3
	},
	{
		name: 'bar',
		rate: 9,
		score: 5
	},
	{
		name: 'baz',
		rate: 5
	}
]

// sort the reviews ascending by it's rate
const sortedReviews = reviews.sort(function (a, b) {
	if (a.rate === b.rate) {
		return a.score - b.score
	}
	return a.rate - b.rate
})
console.log(sortedReviews)