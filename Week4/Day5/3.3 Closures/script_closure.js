//-----------------------
// CLOSURE
//------------------------

// A closure is basically an inner function 
// made accessible from outside of its parent function

// A closure is a function having access to the parent 
// scope even after a parent function has closed

function workWithArray () {
    let fruits = ["apple"];

    function addFruit (newFruit) {
        fruits.push(newFruit)
        console.log("fruits : ", fruits)
    } 

    return addFruit;
}

let innerfunc = workWithArray() 
// innerfunc  is equal to the reference of the addFruit function
// ƒ addFruit (newFruit) {
// //         fruits.push(newFruit)
// //         console.log("fruits : ", fruits)
// //     }


//fruits array ['apple']
innerfunc("banana") //['apple', 'banana']

innerfunc("pear") // ['apple', 'pear']
                  // ['apple', 'banana' pear']

// Other example
function getNumber (num) {
    let myNumber = num;

    function multiply (multiplyNumber) {
        myNumber *= multiplyNumber
        console.log(myNumber);
    }

    return multiply;

}

let calculation = getNumber(2);
// calculation : reference of the multiply function because the getNumber
// function return the multiply function
calculation(10);
// myNumber : 20
calculation(2);
// myNumber : 40