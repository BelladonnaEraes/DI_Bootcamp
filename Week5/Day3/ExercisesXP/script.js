/* Exercise 1 : Comparison
Instructions
Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than 10
the promise rejects if argument is greater than 10.
*/


function compareToTen(num) {
	let checkNum = new Promise((resolve, reject) =>{
		if(num>10) {
			resolve ("More than 10")
		}else{
			reject ("Less than 10")
		}
	})
	.then(result => console.log(result))
    .catch(error => console.log(error))
}
compareToTen(15)
compareToTen(9)

/* Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a 
“success” string.
How can you make your promise from part 1 shorter using Promise.resolve() 
and console.log “success”?
Add code to catch errors and console.log ‘Ooops something went wrong’.
*/

let successString = new Promise((resolve) => {
	setTimeout(() =>{
		resolve ("Success")}, 4000)
})
.then(result => console.log(result))
.catch(error => console.log(error))
/*Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise 
that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will 
reject itself with the string “Boo!”
*/
let promise = Promise.resolve(3).then(value => console.log(value))
let promise1 = Promise.reject().then(err => console.log(err,"Boo!"))










