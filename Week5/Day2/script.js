let newReq = new XMLHttpRequest();
newReq.open("GET", "https://jsonplaceholder.typicode.com/users")
newReq.responseType = "json"
newReq.send()

newReq.onload = function() {
	if(newReq.status !== 200) {
		console.log("error status")
 		
	}else{
		//console.log("Good",newReq.response)
		let obJ = newReq.response
		showData(obJ)

	}
}

let showData = function(x) {
	for (let i = 0; i<3; i++) {
    let {name, email, address: {city}} = x[i]
	let p = document.createElement("p")
	document.body.appendChild(p)
	let text = document.createTextNode(`${name},${city},${email}`)
	p.appendChild(text)}
}