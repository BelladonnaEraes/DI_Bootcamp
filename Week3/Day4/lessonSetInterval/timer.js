//SETINTERVAL

let btnpara = document.getElementById("addpara")
btnpara.addEventListener("click", startAdding);

let counter = 0;
let idInterval;

function startAdding(){
	idInterval=setInterval(addpara,1000)
}


function addpara(){
	if(counter==10){
		clearInterval(idInterval)
	} else {
		let div = document.getElementById("container");
		let p = document.createElement("p");
		let text = document.createTextNode(`This is the paragraph ${counter}`)
		p.appendChild(text);
		div.appendChild(p)
		counter ++;
	}
}