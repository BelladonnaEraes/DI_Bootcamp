// //WHILE
let bankAmount = 100000;
let computer=1000;
let numComputer = 0

// // while (condition) {
// //     //statement
// // }

while(bankAmount>=computer){
    console.log("i buy a new computer");
    numComputer++;
    bankAmount = bankAmount - computer;
    console.log(bankAmount);
}

// 1st loop
// condition true ->
// buy a computer, adding 1 computer
// and decrease the bank amount
// bankAmount=4000

// 2nd loop
// condition true ->
// buy a computer, adding 1 computer
// and decrease the bank amount
// bankAmount=3000

// DO WHILE
let number = 5; 

do {
    console.log("your number is ", number);
    number ++
} while (number < 5)


// 1st loop
// "your num is 5"
// number = 6
// number < 5 -> false so we don't enter the loop


let newNumber = 3; 

do {
    console.log("your number is ", newNumber);
    newNumber ++
} while (newNumber < 5)


// 1st loop
// "your num is 3"
// newNumber = 4
// newNumber < 5 -> true so we enter again the loop

// 2nd loop
// "your num is 4"
// newNumber = 5
// newNumber < 5 -> false  so we don't enter again the loop

//Other example

let language;
let counter = 2;
let goodLanguage = false

do {
    language = prompt("what is your language ?")
    console.log("your language is ", language);
    counter --
    if (language=="french"){
    	goodLanguage = true
    }
} while (language != "french" && counter != 0)

if (goodLanguage){
	console.log("great")
} else {
	console.log("you reached the limit")
}
