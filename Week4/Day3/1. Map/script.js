
// // // //--------------------
// // // //MAP
// // // //-------------------

// // map method returns a new array
// // whatever the callback function returns will be pushed to the newPriceArray

// // map does not mutate the original array - 
// // it creates an array and pushes inside this array
// // whatever value is returned 
// // from the callback function of the map method

// // foreach - mutate the initial array

const restaurant = [20,15.2,10];

const TAXES = 1.17;

// WITHOUT THE MAP METHOD
function addTaxes () {
	const newPrices = [];

	for (let price of restaurant){
		let newP = price*TAXES;
		newPrices.push(newP)
	}
	console.log(newPrices)
}

addTaxes()

// Syntax MAP METHOD

// the map method 
// 1. creates a new array that is empty by default
// 2. loops through the array
// 3. pushed whatever is returned, to the new array
// const newArr = array.map(function (element, index, array) {
// 	//whatever is returned here, is pushed to the newarray
// })


// restaurant.map(function(element, index, array){
// 	console.log(`The element ${element} is at the ${index} in the array ${array}`)
// })

// WITH THE MAP METHOD
function addTaxesSecond() {
	const newPrices = restaurant.map((price) => price*TAXES)
	console.log(newPrices)
}

addTaxesSecond()


//Steps
//create a new empty array called newPrices
//1st loop
//loop through the restaurant array, and we push to the newPrices array
// price*TAXES - 20*1.17
//2nd loop
//loop through the restaurant array, and we push to the newPrices array
// price*TAXES - 15.2*1.17





// // Exercise in class

const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55}
];

// // Use map to create a new array containing only the score of the students
// // result => [33,55]

// create a new array that is assigned to the scores variable
// and this array contains only the score of each student
// const scores = [33,55]
const scores = students.map((student) => student["score"])
console.log(scores)















// let studentScores = students.map((elem) => elem.score)

// console.log(studentScores) //[33,55]

// studentScores.forEach((elem, ind) =>  
// 	document.body.textContent += `The ${ind+1} student got a grade of ${elem}`)

// // -------------
// // EXERCISES
// // -------------