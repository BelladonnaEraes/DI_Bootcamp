//display "hello" 5 times
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// the point of loops: do the same action over and over again

//FOR LOOP
// 1. How many time to we want to do the loop : 5

//syntax
// for (let counter = start ; counter < end; increment){
// 	//statement
// }

// display "hello" 5 times

// for (let counter = 1; counter <= 5; counter++){
// 	console.log("hello");
// }

// 1st loop - 1st turn
// counter = 1
// counter <= 3 -> 1 <= 5 -> true
// console.log("hello");
// counter = 2

// //2nd loop - 2nd turn
// counter = 2;
// counter <= 3 -> 2 <= 3 -> true
// console.log("hello");
// counter = 3


// //3rd loop - 3rd turn
// counter = 3
// counter <= 3 -> 3 <= 3 -> true
// console.log("hello");
// counter = 4

// //4th loop - 4th turn
// counter = 4
// counter <= 3 -> 4 <= 3 -> false
// WE STOP THE LOOP




// let number = 3;
// number = number + 10;
// number += 10;

// let newNum = 3;
// // same
// newNum = newNum + 1;
// //same
// newNum += 1;
// //same
// newNum++


// run 5 times
// for (let counter = 23; counter <= 27; counter++){
// 	console.log("hello");
// }


// loop from 0 to 10
//if the counter is bigger than 5 -> console.log("great")
//if the counter is smaller than 5 -> console.log("bad")

// run 10 times
for (let counter = 0; counter < 10; counter++){
	if (counter >= 5){
		console.log("great")
	} else {
		console.log("bad")
	}
}

// runs 5 times
for (let counter = 0; counter < 10; counter+=2){
	console.log(counter)
	if (counter >= 5){
		console.log("great")
	} else {
		console.log("bad")
	}
}