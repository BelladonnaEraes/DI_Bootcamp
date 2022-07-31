// let formUser = document.getElementById("formUser");

// const retrieveData = function (event) {
// 	event.preventDefault()
// 	// let firstInput = event.target.elements.username.value;
// 	// let secondInput = event.target.elements.lastname.value;
	
// 	// const objUser = {
// 	// 	username : firstInput,
// 	// 	lastname : secondInput
// 	// }


// 	let user = event.target.elements.username.value;
// 	let last = event.target.elements.lastname.value;
	
// 	//possible if the key and the variable containing the value has the same name
// 	const objUser = {
// 		user,
// 		last
// 	}

// 	const jsonString = JSON.stringify(objUser);
	
// 	displayData(jsonString)
// }


// const displayData = function (data) {
// 	let p = document.createElement("p");
// 	let text = document.createTextNode(data);
// 	p.appendChild(text);
// 	document.body.appendChild(p)
// }

// formUser.addEventListener("submit", retrieveData);





let formUser = document.getElementById("formUser");

// function expression are not hoisted, so we cannot call/invoke it before we
// declare it

const retrieveData = function (event) {
	let user = event.target.elements.username.value;
	let last = event.target.elements.lastname.value;
	
	//possible if the key and the variable containing the value has the same name
	const objUser = {
		user,
		last
	}

	const jsonString = JSON.stringify(objUser);
	
	displayData(jsonString)
}


const displayData = function (data) {
	let p = document.createElement("p");
	let text = document.createTextNode(data);
	p.appendChild(text);
	document.body.appendChild(p)
}

formUser.addEventListener("submit", retrieveData);


