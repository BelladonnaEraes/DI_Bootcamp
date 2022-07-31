// --------------
// REVIEW ON FUNCTIONS
// ---------------

//function declaration
nameFunction(args)

function nameFunction (params) {
	//statement
}

nameFunction(args)


//function expression
const nameOfFunctionExpression = function (params) {
	//statement
}

nameOfFunctionExpression(args)

// --------------
// ARROW FUNCTIONS
// ---------------

//arrow function
const nameOfFunctionExpression = (params) => {
	//statement
}

// if it's one line arrow function
const nameOfFunctionExpression = (params) => //statement

const calculus = (a,b) => a+b
calculus(2,6)

//arrow function with no parameter
const sayHello = () => alert("hello");

//arrow function with 1 parameter
const sayHelloUser = (username) => alert("hello"+username)
const sayHelloUser = username => alert("hello"+username)

// syntax arrow function
// A quick and clear way to create a function
// automatically returns a result
const calculus = (a,b) => a+b
calculus(2,6)
// the function has 2 inputs, a and b 
// and returns the output a + b
// Used a lot as callback function : function that is an argument of another function

btn.addEventListener("click", () => alert("hello"))


// --------------
// REVIEW ON FOR EACH
// ---------------

const colors = ["blue", "red", "yellow"];

colors.forEach((color) => console.log(color))
// For each color in the colors array
// we execute an anonymous arrow function
// that console.log the color

// the forEach method, takes a function as an argument
// this function can take 3 parameters: the element, the index and the whole array

colors.forEach((color, i) => console.log(`the ${i+1} color is ${color}`))
colors.forEach((color, i, arr) => console.log(`the ${i+1} color is ${color} in the ${arr}`))

// the 1 color is blue in the blue,red,yellow
// the 2 color is red in the blue,red,yellow
// the 3 color is yellow in the blue,red,yellow

// --------------
// REVIEW ON TERNARY OPERATOR
// ---------------

// ternary operator : create an if/else block quicker and clearer
function checkAge (ageUser) {
	if(ageUser>18){
		alert("you can drive")
	} else {
		alert("you cannot drive")
	}
}

checkAge(21)

function checkAge (ageUser) {
	ageUser>18 ? alert("you can drive") : alert("you cannot drive")
}

checkAge(21)

// --------------
// Ternary operator with arrow
// ---------------

const checkAge = (ageUser) => ageUser>18 ? alert("you can drive") : alert("you cannot drive")
checkAge(21)