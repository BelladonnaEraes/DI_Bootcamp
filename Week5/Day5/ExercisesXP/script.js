let button = document.getElementById("btn")
button.addEventListener("click", firstPush)

function firstPush() {
	let cyrcle = document.getElementsByClassName("fa-3x")[0]
	cyrcle.style.display = "block"
	createChar()	
}

async function createChar() {
	let randomNumb = Math.floor(Math.random() * 84)
}