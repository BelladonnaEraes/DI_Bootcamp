let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};


// 1. Add the lastname Smith to the object

//retrieve the username
// console.log(userCart["username"])
// add a new key named lastName, and the value is "Smith"
userCart["lastName"] = "Smith";

// 2. Change the price of the pear, so it will contain the Taxes. (17%)

//change the value of John to David
// userCart["username"] = "David";

// userCart["prices"]["pear"] = userCart["prices"]["pear"]*1.17;
//the same
userCart["prices"]["pear"] *= 1.17;

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
let userAnswer = prompt("which fruit do you want ?").toLowerCase();
console.log(userAnswer)

// 4. Console.log the price for the specific fruit the user wants
//the price of the apple
// console.log(userCart["prices"]["apple"]);
// //price banana
// console.log(userCart["prices"]["banana"]);
// //price pear
// console.log(userCart["prices"]["pear"]);

// console.log(userCart["prices"]["apple"]);
console.log(userCart["prices"][userAnswer]);
// userAnswer is the value of the variable

// console.log(userCart["prices"]["userAnswer"]);
// "userAnswer" is a key of the object -> won't work

// dot notation doesn't work
console.log(userCart.prices.userAnswer);


// shortcut
let number = 1;

number = number+10
//->11
number += 10;
//->21