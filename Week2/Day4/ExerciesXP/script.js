//Exercise 1 : Information
/*Part I : function with no parameters

Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.*/

function infoAboutMe() {
	console.log("Katy, " + "30 years old, " + "hobby - knitting.")
}

infoAboutMe()

/*Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/


function infoAboutPerson(personName, personAge, personFavoriteColor) {

	console.log("You name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 2 : Tips
/*Instructions
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.*/

function calculateTip() {

  let bill = Number(prompt("How much is the bill?"))


	if (bill<50) { 
		let theTip20 = bill*0.2;
		console.log(bill, theTip20);

	}
	else if (50 <bill<200) { 
		let theTip15 = bill*0.15;
		console.log(bill, theTip15);

	}

	else if (bill<200) { 
		let theTip10 = bill*0.1;
		console.log(bill, theTip10);

	}
	else {
			console.log("Wrong!");
	}
}

//calculateTip()

// Exercise 3 : Find The Numbers Divisible By 23

/*Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.*/

function isDivisible() {
	let sum =0
	let numberYes = 500;
	for (let i=22; i< 500; i++) {
		if (i%23 !== 0) continue;
		sum += i
		console.log(i, sum)	
	}

	}

isDivisible()

//Exercise 4 : Shopping List
/*Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1*/

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"]

function isInStock(item) {
	if(stock[item] && stock[item]>0){
		return true;
	}

	return false;
}
function itemPrice(item) {
	return prices[item];

}

function upDateStock(item) {
	stock[item]--;
}

function myBill() {

for (var i = 0; i <shoppingList.length; i++) {
    	let item =shoppingList[i];
    	if(isInStock(item)){
    		console.log(item, itemPrice(item));
    		upDateStock(item);
    		sum +=itemPrise(item)
    	}
    }    
    return sum;
}

console.log(myBill())


//Exercise 6 : Vacations Costs
/*Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.*/

/*function hotelCost() {

let numberOfnight;

do {
  numberOfnight = prompt("How long would you want to stay in the hotel?", 0);
} while (numberOfnight <= 0 && numberOfnight);

let perCost = numberOfnight*140;
console.log(perCost+"$");
}

hotelCost()


/*Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$*/



/*let distination;

let other; 

function planeRideCost() {

do {
  distination = prompt("What is your destination?", 0);

} while (distination !=="London" || distination !=="Paris" || distination >=0  );

if (distination = ) {
	alert("183$")
}

else if (distination = "Paris") {
	alert("220$")
}

else {
	alert("300$")
} 

}
planeRideCost()


/*Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.*/










