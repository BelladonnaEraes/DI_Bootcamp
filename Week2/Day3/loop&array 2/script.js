let colors = ["blue", "red", "yellow"];

// // console.log(colors[0]) //blue
// // console.log(colors[1]) //red
// // console.log(colors[2]) //yellow

//on the 3 lines above, everything is common expect the index

// //when I know that I have 3 elements in the array
for (let counter = 0; counter <= 2; counter++){
	console.log(colors[counter])
}

// EXPLANATIONS
// // 1st loop
// // counter = 0
// // console.log(colors[0])

// // 2nd loop
// // counter = 1
// // console.log(colors[1])

let colorsOthers = ["blue", "red", "yellow", "white", "black"];

//we don't know how many elements there are in the array
// start at 0, end at 5
for (let counter = 0; counter <= colorsOthers.length ; counter++){
	console.log(colorsOthers[counter])
}

// 1st loop
// console.log(colorsOthers[0]) -> "blue"

// 2nd loop
// console.log(colorsOthers[1]) -> "red"

// 3rd loop
// console.log(colorsOthers[2]) -> "yellow"

// 4th loop
// console.log(colorsOthers[3]) -> "white"

// 5th loop
// console.log(colorsOthers[4]) -> "black"

// 6th loop
// console.log(colorsOthers[5]) -> undefined


// //to not have undefined
// not included the length
for (let counter = 0; counter < colorsOthers.length ; counter++){
	console.log(colorsOthers[counter])
}

// 1st loop
// console.log(colorsOthers[0]) -> "blue"

// 2nd loop
// console.log(colorsOthers[1]) -> "red"

// 3rd loop
// console.log(colorsOthers[2]) -> "yellow"

// 4th loop
// console.log(colorsOthers[3]) -> "white"

// 5th loop
// console.log(colorsOthers[4]) -> "black"


// 1. Loop over this array, and console.log the sum of the prices
// 2. Where should you console log

// let sum = prices[0]+prices[1] + ...
// loop is relevant : I want to do the same action
// add the prices

let prices = [23, 15, 34, 10];

let sum = 0;

for (let i = 0; i < prices.length; i++){
	sum = sum + prices[i];
	//sum += prices[i];
}

console.log(sum)

// Explanations
// sum = 0
// 1st 
// i = 0
// sum = sum + prices[i]
// -> sum = 0 + prices[0]
// -> sum = 23

// // 2nd 
// i = 1
// sum = sum + prices[i]
// -> sum = 23 + prices[1]
// -> sum = 38

// // 3rd 
// i = 2
// sum = sum + prices[i]
// -> sum = 38 + prices[2]
// -> sum = 72

// // 2nd 
// i = 3
// sum = sum + prices[i]
// -> sum = 72 + prices[3]
// -> sum = 82
