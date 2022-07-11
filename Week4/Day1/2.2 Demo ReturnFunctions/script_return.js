//------------------
// return
//------------------

// first possibility

function makeChocolate () {
		let type = "dark";
		return type;
}

//return : means I give to the function a result

function calculatePrice (){
	let chocolateType = makeChocolate(); 
	//chocolateType = "dark"
	let price;
	if (chocolateType === "dark"){
		price = 2;
	} else {
		price = 4;
	}
	console.log(price)
}

function favChocolate () {
	let favchoco = makeChocolate(); 
	//favchoco = "dark"
	if (favchoco === "dark"){
		console.log("Yeah")
	} else {
		console.log("Nope")
	}
}


calculatePrice()
favChocolate()


// Second possibility

// 1. create the function
function makeChocolate () {
	// 2.1 Create a local variable
	let type = "dark";
	//2.2 Invoking the calculatePrice function
	calculatePrice(type);	
}

// 2. invoke it
makeChocolate()

function calculatePrice (chocotype){
	let price;
	if (chocotype === "dark"){
		price = 2;
	} else {
		price = 4;
	}
	console.log(price)
}







// a console.log is not a return

function say(message) {
	let sentence = `<I say ${message}>`;
  console.log("The sentence is : ", sentence);
}

say("Hello");



function say(message) {
    let sentence = `<I say ${message}>`;
    return sentence;
    console.log("hello") //impossible
}

let userSentence = say("Hello"); 
// userSentence = "<I say Hello>"


document.body.textContent = "The userSentence is : ", userSentence;

// //------------------
// // multiple return statements in the function 
// //------------------

function compare(a, b, operator) {
    if (operator === "+") {
        return a+b;
    } else if (operator === "-") {
        return a-b;
    } else {
    		return "ERROR";
    }
    console.log("Hello"); //will never be executed
}

let value = compare(1,2,"+");
//value = 3
console.log(value)

let valueSecond = compare(1,2,"x");
//valueSecond= "ERROR"
console.log(valueSecond)









// example

// 1. Create function
function checkAge(ageStudent) {
  if (ageStudent >= 18) {
    return true;
  } else {
    return false;
  }
}

// 2. Create a global variable
let age = 17;

// if 
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

// // --------------------
// // Returning multiple values from a function
// // -----------------

// //OBJECT

function detailsUser(){
	let username = "John";
	let age = 12;
	return {
		userN : username,
		ageN : age,
	}
}

let details = detailsUser();
console.log("details: ", details)
let usernameFromFunction = details["userN"];
let ageFromFunction = details["ageN"];

// Object

function detailsUser(){
	//local variables
	let username = "John";
	let age = 12;
	return {
		username ,
		age	
	}
}

let detailsMore = detailsUser();
console.log(detailsMore)
document.body.textContent = `${detailsMore["username"]} is ${detailsMore["age"]} years old`


// // ARRAY

function detailsProduct(){
	let product = "jeans";
	let price = 10;
	return [product, price];
}

let myProduct = detailsProduct();
// console.log(myProduct)
document.body.textContent = `${myProduct[0]} is ${myProduct[1]} years old`