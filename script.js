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