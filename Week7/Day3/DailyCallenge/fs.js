const fs = require("fs");

let array = fs.readFileSync('RightLeft.txt').toString().split("")

//console.log(array)
let sum = 1;
let array1 = array.filter((elem)=> {
	if(elem === '>') {
		sum = sum+1;
	} else {
		sum = sum-1;
	}
	
})
console.log(sum)
