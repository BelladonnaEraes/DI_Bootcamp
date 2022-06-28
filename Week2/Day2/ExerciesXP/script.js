//Exercise 1: Simple If/Else Statement
/*Instructions
Create 2 variables, x and y. Each of them should have a different numeric value.
Write an if/else statement that checks which number is bigger.*/


let x = 5;
let y = 2;
if (x > y) {
	console.log("x is the biggest number")
} else {
	console.log("y is the biggest number")}

//Exercise 2: Chihuahua
/*1.Create a variable called newDog where it’s value is “Chihuahua”.
  2.Check and display how many letters are in newDog.
  3.Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
  4.Check if the variable newDog is equal to “Chihuahua”
    if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
    else, console.log ‘I dont care, I prefer cats’*/

 let newDog = "Chihuahua";

 console.log(newDog.length)

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog = "Chihuahua") {
	console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
	console.log("I dont care, I prefer cats")
}

//Exercise 3: Even Or Odd

/*1.Prompt the user for a number and save it to a variable.
  2.Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.*/


let userAnswer = Number (prompt ("What is the number x?"));

if (userAnswer%2 === 0)	{
	console.log("x is an even number")
} else {
	console.log("x is an odd number")
}
//Exercise 4: Group Chat
/*1.Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
If there is no users (the users array is empty), console.log “no one is online”.
If there is 1 user, console.log “<name_user> is online”.
If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
For example, if there are 5 users, it should display:
*/

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users === (users.length=0)) {
	console.log("no one is online")
} else if (users === (users.length=1)) {
	console.log(users[0] + "is online")
} else if (users === (users.length=2)) {
	console.log(users[0] + users[1] + "is online")
} else if (users === (users.length>=3)) {
	console.log(users[0] + users[1] + "and" + (users.length-2) + "are online")
} /* (users ===  this is completely unnecessary try writing only what is needed*/
