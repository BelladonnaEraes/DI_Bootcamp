// //syntax
// if (condition) {
// 	//if the condition is true
// 	//here
// } else {
// 	//if the condition is false
// 	//here
// }



let bankAmount = 100000;
let carCost = 20000;

// result of the statement : he will buy a car

if (bankAmount > carCost) {
	//the condition is true
	console.log("I will buy the car")
} else {
	console.log("I will buy the computer")
}

// buy the car and decrease the amount
if (bankAmount > carCost) {
	// the condition true
	// bankAmount =  bankAmount - carCost; //the same
	bankAmount -= carCost;
	console.log("I will buy the car")
	console.log(bankAmount)
} else {
	console.log("I will buy the computer")
}


// Syntax
// if (condition1){
// 	// condition1 is true 
// 	// here
// } else if (condition2){
// 	//if condition1 is false AND the condition2 is true
// 	//here
// } else if (condition3){
// 	//if condition2 is false AND the condition3 is true
// 	//here
// } else {
// 	//if all of the above conditions are false
// 	//here
// }

let bankAmountJohn = 10;
let carCostJohn = 50000;
let computerCost = 10000;
let phoneCost = 5000;
let bottleWaterCost = 5;

//result of the statement: he will buy a bottle
if (bankAmountJohn>carCostJohn){
	console.log("buy a car");
	bankAmountJohn -= carCostJohn;
} else if (bankAmountJohn>computerCost){
	console.log("buy a computer");
	bankAmountJohn -= computerCost;
} else if (bankAmountJohn>phoneCost){
	console.log("buy a phone");
	bankAmountJohn -= phoneCost;
} else {
	console.log("buy a bottle");
	bankAmountJohn -= bottleWaterCost;
}

console.log("hello")


let johnAge = 13;
let johnHeight = 150;

// more that 10yo 0R more that 1-0cm

// OR : ||
// at least one condition needs to be true
//if one of them is true -> enter the block

if (johnAge > 10 || johnHeight > 160) {
	console.log("he will ride the rollercoaster")
} else {
	console.log("sorry")
}

// GO DIRECTLY TO THE ELSE
if (johnAge > 15 || johnHeight > 160) {
	console.log("he will ride the rollercoaster")
} else {
	console.log("sorry")
}

// // AND: &&
// // both conditions need to be true
// // go to the else
if (johnAge > 15 && johnHeight > 135) {
	console.log("he will ride the rollercoaster")
} else {
	console.log("sorry")
}

// mix

let davidAge = 13;
let davidHeight = 150;
let paidRollerCoaster = true

// he will ride the rollercoaster
if ((davidAge > 15 || davidHeight > 135) && paidRollerCoaster) {
	console.log("he will ride the rollercoaster")
} else {
	console.log("sorry")
}

// This car will only let you drive if you are over 18. Make it do the following:
// Using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let userage = Number(prompt("what's your age"));

if(userage<18) {
	console.log("Sorry, you are too young to drive this car. Powering off")
} else if (userage==18) {
	console.log("Congratulations on your first year of driving. Enjoy the ride!")
} else {
	console.log("Powering On. Enjoy the ride!")
}