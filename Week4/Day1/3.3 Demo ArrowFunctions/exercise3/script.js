// Ask the user for his name and return it
// 	* first by using function declarations
// 	* then function expression,
// 	* then arrow function

//function declaration
askUserName()

function askUserName () {
	let userName = prompt("What's your name");
	return userName;
}

askUserName()

//function expression
const askUserName = function () {
	let userName = prompt("What's your name");
	return userName;
}

askUserName();

//arrow function
const askUserName = () => {
	let userName = prompt("What's your name");
	return userName;
}

const askUserName = () => prompt("What's your name");

askUserName()

// don't need the {} and return
const sum = (a,b) => a+b;


// function checkUsername () {
// 	let user = "John";
// 	pet = "Dog";
// }

// checkUsername();

// // console.log("user", user) //undefined
// console.log("pet", pet) 