// SETTIMEOUT
// Allows us to run a function ONCE after the interval of time.

// SYNTAX
// setTimeout(what I want to execute, timer);


//After 2 seconds the user losts
let btn = document.getElementById("btngame");
btn.addEventListener("click", playGame);

function stopUser (){
	alert("you lost")
}

function playGame () {
	console.log("the game starts");
	setTimeout(stopUser, 2000)
}


// EXAMPLE - flashing
let btnflash = document.getElementById("btnflash");
btnflash.addEventListener("click", playGameFlash);

function stopUserFlash (){
	document.body.classList.toggle("dark");
	setTimeout(stopUserFlash, 500)
}

function playGameFlash () {
	console.log("the game starts");
	alert("you lost");
	setTimeout(stopUserFlash, 2000)
}


// // EXAMPLE - flashing and stop the flashing with a counter

let btnflashcounter = document.getElementById("btnflashcounter");
btnflashcounter.addEventListener("click", playGameFlaskAndStop);

let counter = 0;

function stopUserFlaskAndStop (){
	counter ++;
	let idTimeout;
	document.body.classList.toggle("dark");
	if (counter == 10){
		console.log("stopping the timeout")
		clearTimeout(idTimeout);
	} else {
		idTimeout = setTimeout(stopUserFlaskAndStop, 500)
	}
}

function playGameFlaskAndStop () {
	console.log("the game starts");
	alert("you lost");
	setTimeout(stopUserFlaskAndStop, 2000)
}



// Explanation Toggle

let btntoggle = document.getElementById("btntoggle");
btntoggle.addEventListener("click", changeColor);

function changeColor(){
	document.body.classList.toggle("dark");
}


// Use ClearTimeout to clear the setTimeout from the memory

let idTimeout = setTimeout(welcome, 2000);
clearTimeout(idTimeout);

function welcome(){
	console.log("hello");
}