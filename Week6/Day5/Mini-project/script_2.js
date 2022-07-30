let h3
let divTask
let displayTasks = (x) => {
	let tasks = JSON.parse(x)
	return tasks;
}
let obj = displayTasks(localStorage.getItem("tasks"))
//console.log(obj)
createAll(obj)
function createAll(tasks12) {
   tasks12.forEach((elem) => {
		divTask = document.createElement("div")
		document.body.appendChild(divTask)
		h3 = document.createElement("h3")
		divTask.appendChild(h3)
		let p = document.createElement("p")
		divTask.appendChild(p)
		h3.appendChild(document.createTextNode(`Name : "${elem.name}"`))
        p.appendChild(document.createTextNode(`Description: "${elem.description}"\n Start date and time :"${elem.start}"\nEnd date and time :"${elem.end}"`))
		p.style = "white-space: pre-line;"
		h3.addEventListener("click", toggleForP=()=>{p.classList.toggle("hidden")})
		createBackground(elem.isCompleted)
		console.log(elem.isCompleted)
		btnComp()
	})
}

function createBackground (isCompleted1) {
	if (!isCompleted1) {
        h3.style.background = "lightpink"  
	} else {
		h3.style.background = "lightgreen" 
	}
}
console.log(obj)

function btnComp() {
	let btnCompl = document.createElement("button")
	divTask.appendChild(btnCompl)
	btnCompl.appendChild(document.createTextNode("Not completed"))
	btnCompl.addEventListener("click", completedBut =()=> {
		h3.classList.toggle("redgreen")
		console.log()
	})
}













