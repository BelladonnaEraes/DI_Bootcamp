/*
Exercise 1 : Find The Sum
Instructions
Create a one line function (ie. an arrow function) that receives two 
numbers as parameters and returns the sum.
*/

let summa =(x, b) => {return x+b}
//console.log(summa(10, 5))

/* Exercise 2 : Kg And Grams
Instructions
Create a function that receives a weight in kilograms and 
returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function 
declaration and function expression.
Finally, use a one line arrow function and invoke it.
*/


function kgAndgrams(kg) {
	return kg*1000
}


let gRamms = function(kgs){
	return kg*1000
} 

//For function declaration we use 


let gRamm = (kgs) => kg*1000;

/*Exercise 3 : Fortune Teller
Instructions
Create a self invoking function that takes 4 
arguments: number of children, partner’s name, 
geographic location, job title.
The function should display in the DOM a 
sentence like "You will be a <job title> in 
<geographic location>, and married to <partner's name> 
with <number of children> kids."*/



//(function(x,y,z,k) {
//	let p = document.createElement("p")
//	let sentence = document.createTextNode(`You will be a ${z} in ${k}, and married to ${y} with ${x} kids.`)
//    document.body.appendChild(p)
//    p.appendChild(sentence)
//})( 4," Mary","Doctor","Paris")

/*Exercise 4 : Welcome
Instructions
John has just signed in to your website and you want 
to welcome him.

Create a Bootstrap Navbar in your HTML file.
In your js file, create a self invoking funtion that 
takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying 
the name of the user and his profile picture.
*/

/*(function(nameUser) {
	let navbar1 = document.getElementsByTagName("navbar")
	let div1 = document.createElement("div")
	let userName = document.createTextNode(nameUser)
	div.appendChild(userName)
	navbar1.appendChild(div1)
})("John")*/

//I don't know why it doesn't work:(

/*Exercise 5 : Juice Bar
Instructions
You will use nested functions, to open a new juice bar.

Part I:
The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


Part II:
In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.*/

function makeJuice(sizeBeverage) {
	let ingredients = []
	function addIngredients(firstingredient,secondingredient,thirdingredient) {
		let div = document.createElement("div")
		document.body.appendChild(div)
		let orderText = document.createTextNode(`The client wants a ${sizeBeverage} juice, containing ${firstingredient}, ${secondingredient}, ${thirdingredient}`)
		div.appendChild(orderText)
		ingredients.push(firstingredient,secondingredient,thirdingredient)
	}
	function displayJuice() {
		let div = document.createElement("div")
		document.body.appendChild(div)
		let orderText = document.createTextNode(`The client wants a ${sizeBeverage} juice, containing ${firstingredient}, ${secondingredient}, ${thirdingredient}`)
		ingredients.push(firstingredient,secondingredient,thirdingredient)
	}
	addIngredients("papay", "banan", "apple")
	//console.log(ingredients)

}

makeJuice("L")















