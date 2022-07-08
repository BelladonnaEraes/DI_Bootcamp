/*Retrieve the form and console.log it.

Retrieve the inputs by their id and console.log them.

Retrieve the inputs by their name attribute and console.log them.

When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :Retrieve the form and console.log it.

Retrieve the inputs by their id and console.log them.

Retrieve the inputs by their name attribute and console.log them.

When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :*/

/*let formForm = document.getElementsByTagName("form")
console.log(formForm)

let inputfname = document.getElementById("fname")
console.log(inputfname)
let inputlname = document.getElementById("lname")
console.log(inputlname)
let inputsubmit = document.getElementById("submit")
console.log(inputsubmit)

let inputfname1 = document.getElementsByName("fname")
console.log(inputfname1)
let inputlname1 = document.getElementsByName("lname")
console.log(inputlname1)

inputsubmit.addEventListener("click", usersAnswerSubmit)
function usersAnswerSubmit(evt) {
	evt.preventDefault();
let li1 = document.createElement("li");
document.body.children[1].appendChild(li1);
let firstName = document.createTextNode(inputfname.value);
li1.appendChild(firstName);
let li2 = document.createElement("li");
document.body.children[1].appendChild(li2);
let LastName = document.createTextNode(inputlname.value);
li2.appendChild(LastName);
}*/

///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*Exercice 4 : Volume Of A Sphere
Instructions
Write a JavaScript program to calculate the volume of a sphere.*/

let inputRadius = document.getElementById("radius")
let inputVolume = document.getElementById("volume")
// let submitPush = document.getElementById("submit")
let form = document.getElementById("MyForm")

form.addEventListener("submit", calculetion)

function calculetion (evt) { 
	evt.preventDefault();
	let spherVolume = Math.pow(inputRadius.value,3)*4*3.14/3
	console.log(spherVolume)
	// let answerVolume = Number(spherVolume.value);
	inputVolume.value = spherVolume;
}








