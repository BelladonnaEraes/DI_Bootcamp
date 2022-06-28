for (let counter = 0; counter <= 15; counter++){
	if (counter%2 === 0) {
		console.log(counter + " is even")
	}
	else {
		console.log(counter+ " is odd")
	}
}
//### Exercise 2:
//1. Change in the array, the fruit to plural, use this array
let fruits = ["apple", "banana", "pear", "melon"];
//the result should be
//let fruits = ["apples", "bananas", "pears", "melons"];

//fruits[0] = fruits[0]+"s";


for (let i=0; i<fruits.length; i++) {
	fruits[i] = fruits[0]+"s"}
	console.log(fruits)
