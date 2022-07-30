//retrieve inputs 

let btm = document.getElementById("btm")
let form = document.getElementById("form")
let allTask = JSON.parse(localStorage.getItem("tasks")) || []

form.addEventListener("submit", pushTask)

function pushTask(e) {
	e.preventDefault();
	let nameInp = document.getElementById("name");
    let descriptionInp = document.getElementById("description");
    let starttimeInp = document.getElementById("starttime");
    let endtimeInp = document.getElementById("endtime");
    let starttimeInp1 = starttimeInp.value.replace('T',' ').replace('-','/').replace('-','/');
    let endtimeInp1 = endtimeInp.value.replace('T',' ').replace('-','/').replace('-','/');
    let allTaskObj = {
    	name: nameInp.value,
    	description: descriptionInp.value,
    	start: starttimeInp1,
    	end: endtimeInp1,
    	isCompleted: false
    }
    allTask.push(allTaskObj)
    localStorage.setItem("tasks", JSON.stringify(allTask));
}
