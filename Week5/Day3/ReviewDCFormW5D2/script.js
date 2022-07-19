(function setEvents() {
	const form = document.getElementById("formgif");
	form.addEventListener("submit", retrieveInput);

	const btnDeleteAll = document.getElementById("delAll");
	btnDeleteAll.addEventListener("click", deleteAllGifs)
})()

const xhrobj = new XMLHttpRequest();

// event listeners for the XMLHttpRequest object
xhrobj.addEventListener("load", loadData);
xhrobj.addEventListener("progress", inProgress)
xhrobj.addEventListener("error", errorNetwork)

const container = document.getElementById("container");

function retrieveInput (event) {
	event.preventDefault();
	const inputvalue = document.getElementById("cat").value;
	requestData(inputvalue)
}

// create the request
function requestData (value) {
	xhrobj.open("GET", `https://api.giphy.com/v1/gifs/random?tag=${value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
	xhrobj.responseType = "json";
	xhrobj.send()
}


function loadData () {
	if (xhrobj.status !== 200) {
		console.log("error")
	} else {
		appendData(xhrobj.response)
	}
}


function appendData(gif){
	const containerImg = document.createElement("div");
	const imggif = document.createElement("img");
	imggif.style.width = '30%';
	const btnDeleteGif = document.createElement("button");
	const text =  document.createTextNode("Delete the gif");
	btnDeleteGif.appendChild(text);
	btnDeleteGif.addEventListener("click", deleteGif);

	// obj destructuring
	const {
		data : {
			images : {
				original : {
					url
				}
			}
		}
	} = gif;

	imggif.setAttribute("src", url);
	containerImg.appendChild(imggif)
	containerImg.appendChild(btnDeleteGif)
	container.appendChild(containerImg)
}

// when the server is processing - meaning looking for the data
function inProgress (){
	console.log("processing")
}

// when the request couldn't be made because of network error
function errorNetwork (){
	console.log("error")
}

// delete one gif
function deleteGif(event){
	const divImage = event.target.parentElement;
	divImage.remove();
}

// delete all gifs
function deleteAllGifs (){
	while(container.hasChildNodes()){
	    container.removeChild(container.lastChild);
	}
	//OR
	// container.textContent = ""
}