// // -----------------------
// // FILTER
// // -----------------------

// const numbers = [2,3,4,5,6];

// // create a new array, if only even numbers
// // result [2,4,6]

// WITHOUT FILTER
function addNumbers (){
	const newEvenArray = []
	for(let num of numbers){
		if(num%2===0){
			newEvenArray.push(num)
		}else{
			continue;
		}
	}

	console.log(newEvenArray)
}

addNumbers()


// WITH FILTER
function addNumbersSecond(){
	const newArray = numbers.filter((elem, i, array) => elem%2===0)
	console.log(newArray)
}

addNumbersSecond()

//Steps
// create an empty array
// 1st loop
// condition is true so the element is pushed to the array
// newArray = [2]
// 2nd loop
// condition is false so the element is skipped
// 3rd loop
// condition is true so the element is pushed to the array
// newArray = [2,4]


// // EXERCISES IN CLASS

const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55},
	{name: 'John', score: 75}
];

// create a new array, 
// with only the students that have a score bigger than 50 and the number of letters
//in his name bigger than 4

const goodStudents = students.filter((elem) => elem["score"]>50 && elem["name"].length > 4);
console.log(goodStudents)

// // Other example

const strings = ["hello", "great", "hey"];

const stringWithH = strings.filter((word) => word.charAt(0) === "h");
console.log(stringWithH)