// Daily challenge

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// access the item "Oranges"

console.log(moreFruits[1][1][0]);

// Array is ordered list

// REVIEW OF THE VOCABULARY
// Data Types

"word" -> string list of characters between quotes
12 -> a number
true false -> boolean
undefined -> variable doesn't have a value yet. The variable was declared but
not defined
array -> ordered list , ordered by index ["a", "b", "c"]
NaN -> not a number
isNaN(12) -> false
isNaN()-> check if the data is a number ->  and return a boolean

true == 1 //true
false == 0 //true
12%2 // 0 -> 12 is an even number , it's divisible by 2
13%2 // 1 -> 13 is an odd number , it's not divisible by 2

// variables
save data to reuse it

// 1st declare and then define

// declaration
let nameVariable;
// definition
nameVariable = 12;


// 2nd declare and define at the same time
let nameOtherVariable = 13;
nameOtherVariable = 42;
nameOtherVariable = 100;

//the let keyword allow us to redefine a variable
let listColor = ["blue", "red"];
listColor = ["white", "black"];
console.log(listColor) //["white", "black"]

//constant variables
const number = 1;
// cannot redefine it
number = 2; //ERROR


username = "Dan"; //don't do this
let username = "Dan"; //do this

// we don't use var anymore - because it allows to redeclare a variable
var age = 43;
var age = 12;

// methods and properties
// method is an action
// method has ()
"hello".toUpperCase()

// properties
// doesn't have ()
"hello".length