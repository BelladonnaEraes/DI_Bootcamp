//Exercise 1 : Favorite Color
//Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my","favorite","color","is","blue"];
let mySentence = sentence[0] + " " + sentence[1] + " " + sentence[2] + " " + sentence[3] + " " + sentence[4];

console.log(mySentence); 

//Exercise 2 : Mixup

let str1 = "mix";
let str2 = "pod";
//2. Slice out and swap the first 2 characters of the two strings from part 1.
//3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
//4. Finally console.log the new concatenated string.

str1 = "pod";
str2 = "mix";

let str3 = str1 + " " + str2;
console.log(str3)

//Exercise 3 : Calculator
/*1.Prompt the user for the first number.
  2.Store the first number in a variable called num1.
  3.Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
  4.Prompt the user for the second number.
  5.Store the second number in a variable called num2.
  6.Create an Alert where the value is the SUM of num1 and num2.
BONUS: Make a program that can subtract, multiply, and also divide!
*/

let num1 = Number(prompt("First namber:"));
let num2 = Number(prompt("Second namber:"));
let sum = num1 + num2;
console.log(sum);
alert(sum);


