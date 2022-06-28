//Exercise 1 : List Of People
let people = ["Greg", "Mary", "Devon", "James"];
/*Part I - Review About Arrays
Write code to remove “Greg” from the people array.

Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this let people = 
["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and 
the length of the array?*/

people.shift();
people.slice(2,1,"Jason");
people.push("Katy");

console.log(people.indexOf("Mary"));

people.pop();

console.log(people);

console.log(people.indexOf("Foo")); //Because of it is out of arrey

let last = people.length-1;
/*Part II - Loops

Using a loop, iterate through the people array and console.log each person.

Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
Hint: take a look at the break statement in the lesson.
*/

/*for (let counter=0; counter<people.length; counter++) {
	console.log(people[counter])
}*/

// Exercise 2 : Your Favorite Colors
/*1.Create an array called colors where the value is a list of your five favorite colors.
  2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
  3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus*/


let colors = ["black","dark black","medium black","light black","the lightest black"]

for (let counter=0; counter<colors.length; counter++) {
	console.log("My #" +(counter+1)+ " " + colors[counter])
}

//Exercise 3 : Repeat The Question
/*Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?*/



let numberOfperson;
let counter = 5;
let trueNumber = false

do {
	numberOfperson = Number(prompt("What is your phone number?"))
	console.log("Your phone namber is " + numberOfperson);
	counter --
	 if (numberOfperson>10) {
        trueNumber = true
	 }
} while (numberOfperson < 10 && counter !=0)
   if (trueNumber) {
   	console.log("Salute!")
   } else {
	console.log("you reached the limit")
}

//Exercise 4 : Building Management
/*Copy and paste the above object to your Javascript file.

Console.log the number of floors in the building.

Console.log how many apartments are on the floors 1 and 3.

Console.log the name of the second tenant and the number of rooms he has in his apartment.

Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.*/

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building["numberOfFloors"]);
console.log(building["numberOfAptByFloor"]["firstFloor"]+building["numberOfAptByFloor"]["thirdFloor"]);
console.log(building["nameOfTenants"][1]+" "+building["numberOfRoomsAndRent"]["dan"][0]);

if ((building["numberOfRoomsAndRent"]["sarah"][1]+building["numberOfRoomsAndRent"]["david"][1])>building["numberOfRoomsAndRent"]["dan"][1]) {
	building["numberOfRoomsAndRent"]["dan"].splice(1,1,1200)
} else {
console.log("Ok!")
}
console.log(building["numberOfRoomsAndRent"]["dan"][1]);


//Exercise 5 : Family
/*Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.*/

let family = {
		Age: 35,
	    Higth: 170,
	    Hair: "blond",
	    Pet: "cat",
};

for (let personality in family){
 console.log(personality)
 console.log(family[personality])
}



