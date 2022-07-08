/*Create an input type text that takes/shows only letters. 
(ie. numbers and special characters won’t be accepted)

Hint: use one of the following events to remove any character that is not a letter

keyup event
or keypress event
or keydown event
or input event

Hint : Check out keycodes in Javascript or Regular Expressions*/

let input = document.getElementById("letters")
let form = document.getElementsByTagName("form")[0]
let button = document.getElementById("button")
button.addEventListener("click", userAnsver)

function userAnsver (event) {
    
    input11 = /^[a-zA-Z]+$/
	event.preventDefault();

	if (input.value.match(input11)) {		
		let showAnswer = document.createElement("p")
		showAnswer.appendChild(document.createTextNode(input.value))
		form.appendChild(showAnswer)
		showAnswer
	} else  {
		alert("Only letters!")
	}
console.log(input.value)
}