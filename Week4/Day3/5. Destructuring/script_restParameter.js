// // ------------------
// // DESTRUCTURING
// // --------------------

// // Usually, if the array is longer than the list at the left, 
// // the “extra” items are omitted.

const colors = ["blue", "yellow", "black", "red"];

// const favColor = colors[0];
// const secondFav = colors[1];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor, secondColor)
console.log(colors) //array unchanged

// ignore value
const [,secondFavColor] = colors;
console.log(secondFavColor)

// // // ------------------------
// // // REST with arrays
// // // -----------------------

// // // ---------------------------
// // // REST OPERATOR
// // // The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.
// // // USE IT BEFORE A VARIABLE
// // // ----------------------------

// packs values into an array

// // The value of others is the array of the remaining array elements
const colorsTwo = ["blue", "yellow", "black", "red"];
let [first, second, ...others] = colorsTwo;
console.log("first = ", first, "second = ", second, "others = ", others)

// // // ---------------------------
// // // SPREAD OPERATOR
// // // The spread operator (...) helps you expand iterables into individual elements.
// // // USE IT BEFORE AN ARRAY
// // // ----------------------------

let letters = ["a","b","c"];
let numbers = [1,2,3];
let newArray =  [...letters, ...numbers];
console.log(newArray)
//["a","b","c",1,2,3]


// ...[array] -> spread operator - unpack the values


// // ------------------
// // COPY
// // ------------------

// // //Copying
// // //Copying by reference
let names = ["John", "Tom"];
let friends = names; //both have the same adress
friends.push("Lea") //i change friends, it will also change names
// because they point to the same reference
console.log("friends : ", friends, "names ", names)


// Coppying by Value with the spread operator
let newFriends = [...names]
console.log("newFriends : ", newFriends) //["John", "Tom"]
newFriends.push("Lea") //["John", "Tom", "Lea"]
console.log("newFriends : ", newFriends, "names ", names)
							// ["John", "Tom", "Lea"]  ["John", "Tom"]


// // // Copying
// // // Shallow copy 
let newNames = ["John", "Tom", ["blue", "red"]];
let newNamesArr = [...newNames]
console.log("newNamesArr : ", newNamesArr) //["John", "Tom", ["blue", "red"]]
newNamesArr[2].push("yellow") //["John", "Tom", ["blue", "red", "yellow"]]
// the nested arrays have the same reference reference in the heap
//so if we chage one, it changes the other
console.log("newNames : ", newNames, "newNamesArr ", newNamesArr)
// 							["John", "Tom", ["blue", "red", "yellow"]]  ["John", "Tom", ["blue", "red", "yellow"]]

// // // ------------------
// // //Rest parameter in FUNCTIONS
// // // --------------------

function checkNames(...classmatesNames){
	console.log(classmatesNames); //array containing the names of the students
}

checkNames("John", "Josh", "Lea", "Tom", "Jane")


// // // ------------------
// // //SPREAD OPERATOR in FUNCTIONS
// // // --------------------


function checkNames(a,b,c){
	console.log(a,b,c);
}

checkNames(...["John", "Josh", "Lea"])



