// // --------------------
// // --- Functions Declaration
// // --------------------
 
//1. Invoke
squareOne(2)

// 2. Create
// HOISTED TO THE TOP OF THE SCOPE
function squareOne (x){
	console.log("square")
	return x * x;
}

// 3. Invoke it again
squareOne(2)


// // // --------------------
// // // --- Functions expression
// // // --------------------

// // // anonymous function 
// // // assigned to a variable

// squareTwo(2);//not possible

// // // NOT HOISTED
const squareTwo = function (x) {
	console.log("square")
	return x * x;
}

squareTwo(2);

// // -- Use with callbacks
// // function expression - anonymous 
btn.addEventListener("click", 
	function () {
		alert("hello")
	}
)


// // --------------------
// // --- Anonymous arrow function
// // --------------------

//anonymous
// function (a) {
// 	return a + 100;
// }

// // // The same as
// (a) => {
//   return a + 100;
// }

// // in 1 line, the arrow function returns the value
// (a) => a + 100;

// a => a + 100;

// // // --------------------
// // // --- ES6 arrow functions
// // // ---------

// //function declation 
squareOne(2);

// function declaration
function squareOne (x){
	return x * x;
}

//function expression
const squareOneSecond = function (x) {
	return x * x;
}

//arrow function
const squareOneThird = (x) => x*x
let result = squareOneThird(2);
console.log(result)

// with different number of parameters
const squareA = (x) => x*x;
const squareB = x => x*x;
// more than 1 parameter
const squareC = (x,y) => x*y;
// no parameters
const squareD = () => "hello";

btn.addEventListener("click", 
	function () {
		alert("hello")
	}
)

//same as
btn.addEventListener("click", () => alert("hello"))

//If the function has more than 1 line, we need square brackets and return
const squareE = (x) => {
	x = x + 2
	return x*x
}


// // // --- TERNARY OPERATOR

function getTemp (temp) {
	if (temp > 20) {
		return "Summer";
	} else {
		return "Winter";
	}
}

getTemp(24)

// expression ? if the expression is true : if the expression is not true
function getTempTwo (temp) {
	let season = temp > 20 ? "Summer" : "Winter";
	return season;
}

getTempTwo(24)

const getTempThree = (temp) => temp > 20 ? "Summer" : "Winter";
getTempThree(24)


// // // // // --------------------
// // // // // --- Exercises
// // // // // --------------------


// 1. Greet the user with his name, the user's name is a parameter. Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

// function declaration
// function welcome (username){
// 	alert(`Hello ${username}`)
// }

// welcome("John");

// // function expression
// const welcomeSecond = function (username){
// 	alert(`Hello ${username}`)
// }

// welcomeSecond("John");

// //arrow function
// const welcomeThird = (username) => alert(`Hello ${username}`)
// welcomeThird("John");

// const welcomeFourth = username => alert(`Hello ${username}`)
// welcomeFourth("John");