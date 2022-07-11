/*Exercise 1 : Scope
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file.
*/
// #1 my prediction: 5, Real: 3
/*function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// run in the console:
q1()

//#2 my prediction: 5, 5, 5 Real: 0, 5, 
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// run in the console:
q22()
q2()
q22()

//#3 my prediction: hello, indifined Real: hello 
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// run in the console:
q3()
q32()

//#4 my prediction: test; Real: test
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4()

//#5  my prediction: 2; Real: 5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);*/

/*Exercise 2 : Ternary Operator
Transform the winBattle() function to an arrow function.
Create a variable called experiencePoints.
Assign to this variable, a ternary operator. 
If winBattle() is true, the experiencePoints variable should be equal 
to 10, else the variable should be equal to 1.
Console.log the experiencePoints variable.
*/
//function winBattle(){
//   return true;
//}
(winBattle) => { 
    return true; 
}
let experiencePoints;

if (winBattle = true) {
    experiencePoints = 10;
} else {
    experiencePoints = 1;
}

//Console.log(experiencePoints)
/*
Exercise 3 : Is It A String ?
Instructions
Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
Check out the example below to see the expected output

*/
//let something = 6

//let checked = (something) => isString(something) = true ? "yes" : "no";

//checked(6)
/* Exercise 4 : Colors
Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods.
*/
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => console.log(`#${index+1} choice is ${element}`))

/*
Exercise 5 : Colors #2
Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator.
*/
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((element, index) => {
    if(index === 0){
        index +=1
        index +=ordinal[1]
    }else if(index === 1){
        index +=1
        index +=ordinal[2]
    }else if(index === 2){
        index +=1
        index += ordinal[3]
    }else{
        index +=1
        index += ordinal[0]
    }console.log(`${index} choice is ${element}`)
})











