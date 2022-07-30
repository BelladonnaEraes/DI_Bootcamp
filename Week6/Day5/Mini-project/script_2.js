let h3
(displayTasks = ()=> {
	let tasks = JSON.parse(localStorage.getItem("tasks"))
	console.log(tasks)
	for (let eachTask of tasks) {
		let divTask = document.createElement("div")
		document.body.appendChild(divTask)
		h3 = document.createElement("h3")
		divTask.appendChild(h3)
		let p = document.createElement("p")
		divTask.appendChild(p)
		h3.appendChild(document.createTextNode(`Name : "${eachTask.name}"`))
        p.appendChild(document.createTextNode(`Description: "${eachTask.description}"\n Start date and time :"${eachTask.start}"\nEnd date and time :"${eachTask.end}"`))
		p.style = "white-space: pre-line;"
		h3.addEventListener("click", toggleForP=()=>{p.classList.toggle("hidden")})
	}
})()

