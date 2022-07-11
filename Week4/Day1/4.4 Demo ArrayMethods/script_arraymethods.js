// //---------------------------------
// // Array methods and arrow function
// //---------------------------------

// with for loop
// let classmates = ["Josh", "Lily", "Sophie", "Mark"]; 

// for (let i =0; i< classmates.length; i++){
// 	console.log(classmates[i])
// }

// for (let student of classmates){
// 	console.log(student)
// }

// for (let i =0; i< classmates.length; i++){
// 	showStudent(classmates[i])
// }

// function showStudent (student) {
// 	console.log(student)
// }


// for each

let classmates = ["Josh", "Lily", "Sophie", "Mark"]; 

// //with callback anonymous function
//with function expression
classmates.forEach(
	function (element, index) {
		console.log(`${element} is at the index ${index}`)
	}
)

//1st loop
// Josh is at the index 0

// //2nd loop
// Lily is at the index 2

//anonymous arrow function
classmates.forEach((element, index) => console.log(`${element} is at the index ${index}`))

//with a named function
const checkStudent = (element, index) => console.log(`${element} is at the index ${index}`)
classmates.forEach(checkStudent);

// EXERCISE

// Use for each and arrow function, 
// to add a "&" after Sophie and a "!" after all the other names
// the result is ['Josh!', 'Lily!', 'Sophie&', 'Mark!']
// Use tenary operator

classmates.forEach((element, index) => {
	if(element === "Sophie"){
		classmates[index] += "&"
	}else{
		classmates[index] += "!"
	}
})

console.log(classmates)

//ternary operator
classmates.forEach((element, index) => element === "Sophie" ? classmates[index] += "&" : classmates[index] += "!")
// console.log(classmates)

//same with the array parameter
classmates.forEach((element, index, array) => element === "Sophie" ? array[index] += "&" : array[index] += "!")
// console.log(classmates)

// change the "red" to "lightred"
// let colors = ["blue", "red"];
// colors[1] = "lightred"

// syntax
// arrayname.forEach(function)

// // ------------------
// // SOME & EVERY
// // ------------------

// arrayName.some((element,index,array) => {
// 	console.log("num = ", num);
// 	console.log("ind = ", ind);
// 	console.log("array = ", array);
// })

// at least one item is bigger than 5
let myArr = [12,2,4,6];

// let result = myArr.some((element) => {return element>5})
//same
let result = myArr.some((element) => element>5)
console.log(result)

// let result = myArr.some((element) => {
// 	console.log("element is ", element)
// 	return element>5
// })
// console.log(result)

// all the items is bigger than 5
let resultSecond = myArr.every((element) => {
	console.log("element is ", element)
	return element>5
})
console.log(resultSecond)