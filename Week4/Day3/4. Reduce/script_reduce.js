// // // // -----------------------
// // // // REDUCE
// // // // -----------------------

// WITHOUT REDUCE
const numbers = [10,20,35,40];

function getSum(){
	let sum = 0;
	for(let num of numbers){
		sum += num
	}
	console.log(sum)
	return sum;
}

//WITH REDUCE WITHOUT Initial Value

let sumOne =  numbers.reduce((accumulator,currentValue,index,arr) => {
	console.log(`In the ${index} loop`)
	console.log("accumulator = ", accumulator);
	console.log("currentValue = ", currentValue);
	return accumulator+currentValue
})

console.log(sumOne)

// in one line
// let sumOne =  numbers.reduce((accumulator,currentValue) => accumulator+currentValue)


// // // 1st loop
// accumulator = 10
// currentValue = 20
// return accumulator+currentValue
// return 10+20 -> 30

// // // // 2nd loop
// accumulator = 30
// currentValue = 35
// return accumulator+currentValue
// return 30+35 -> 65

// // // // 3rd loop
// accumulator = 65
// currentValue = 40
// return accumulator+currentValue
// return 65+40 -> 105

// console.log(sumOne)


// WITH REDUCE AND INITIAL VALUE

let sumTwo =  numbers.reduce((accumulator,currentValue,index,arr) => {
	return accumulator+currentValue
}, 1000)


// // reduce(callfunc, initialvalue)

console.log(sumTwo)


// // 1st loop
// accumulator=1000
// currentValue = 10
// return accumulator+currentValue
// return 1000+10 -> 1010

// // 2nd loop
// accumulator=1010
// currentValue = 20
// return accumulator+currentValue
// return 1010+20 -> 1030

// 3rd loop

// // WITH STRINGS

const people = ["John","Lea","Tom"];
// // secret society is JLT

const secretSty = people.reduce((acc, name) => 
	{
		let society = acc+name.charAt(0)
		return society
	}, ""
)

console.log(secretSty)

// same in one line
const secretSty = people.reduce((acc, name) => acc+name.charAt(0), "")

console.log(secretSty)


// //1st loop
// accumulator = "";
// name = "John"
// return J

// // 2nd loop
// accumulator = J
// name = "Lea"
// return JL

// // 3rd loop
// accumulator = JL
// name = "Tom"
// return JLT

