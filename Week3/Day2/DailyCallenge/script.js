/*Instructions
In todays exercise we will be creating a Mad Libs game.
If you’ve never played this game, a mad lib is a game where you fill 
in a bunch of blank inputs with different word types (ie : noun, adjective, verb), 
and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

In this exercise you work with the HTML code presented below.

Follow these steps :

Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
Make sure the values are not empty
Write a story that uses each of the values.
Make sure you check the console for errors when playing the game.
Bonus: Add a “shuffle” button to the HTML file, when clicked 
the button should change the story currently displayed (but keep the values entered by the user). 
The user could click the button at least three times and get a new story. Display the stories randomly.*/


let formSentence = document.forms.libform;
formSentence.addEventListener("submit", retrieveInputValues);

let allValues = [];

function retrieveInputValues (ev) {
	ev.preventDefault();
	// console.log(ev.target); //the form
	let allInputs = ev.target.getElementsByTagName("input");
	for (let input of allInputs){
		// trim method
		let valueData = input.value;
		console.log("valueData", valueData.length)
		if (valueData === '' || valueData.length === 0){
			console.log("one value is empty")
			allValues = [];
			return;
		} else {
			allValues.push(valueData);
			input.value = ''
		}
	} 
	displayValues();
}


function displayValues () {
	console.log("in the displayValues function")
	let sentence = `The ${allValues[1]} ${allValues[0]} ${allValues[3]} in ${allValues[4]} with ${allValues[2]}`;
	let text = document.createTextNode(sentence);
	let span = document.getElementById("story");
	span.appendChild(text)
}