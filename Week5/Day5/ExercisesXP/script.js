let button = document.getElementById("btn")
button.addEventListener("click", firstPush)
let cyrcle = document.getElementsByClassName("fa-3x")[0]
let section = document.getElementsByTagName("section")[0]
let h3 = document.createElement("h3")
section.appendChild(h3)
let p1 = document.createElement("p")
section.appendChild(p1)
let p2 = document.createElement("p")
section.appendChild(p2)
let p3 = document.createElement("p")
section.appendChild(p3)
let p4 = document.createElement("p")
section.appendChild(p4)


function firstPush() {
	cyrcle.style.display = "block"
	h3.style.display = "none"
	p1.style.display = "none"
	p2.style.display = "none"
	p3.style.display = "none"
	p4.style.display = "none"
	createChar()	
}

async function createChar() {
	let randomNumb = Math.floor(Math.random() * 84)
	try {
		let randomChar = await fetch(`https://www.swapi.tech/api/people/${randomNumb}`)
	    cyrcle.style.display = "none"
	       if (randomChar.status !== 200) {
		     throw new Error ("Character don't find")
		     let p1 = document.createElement("p")
		     section.appendChild(p1)
		     p1.innerText=`Character don't find`
	       } else {
		     let randomChar1 = await randomChar.json()
		     displayChar(randomChar1)	
	       }
    } catch(error){
		console.log(error.message)
	}
}

function displayChar(x){
	h3.style.display = "block"
	p1.style.display = "block"
	p2.style.display = "block"
	p3.style.display = "block"
	p4.style.display = "block"
	let nameChar = x["result"]["properties"]["name"]
	let heightChar = x["result"]["properties"]["height"]
	let genderChar = x["result"]["properties"]["gender"]
	let birthChar = x["result"]["properties"]["birth_year"]
	let randomWorld = x["result"]["properties"]["homeworld"]	
	worldP(randomWorld)
	h3.innerText=`${nameChar}`
	p1.innerText=`Height: ${heightChar}`
	p2.innerText=`Gender: ${genderChar}`
	p3.innerText=`Birth Year: ${birthChar}`
	p4.style.display = "block"

	
}

async function worldP(impWorld) {
	try {
	    let randomWordUrl = await fetch(impWorld)
	    let randomWordUrl1 = await randomWordUrl.json()
	    let randomW = randomWordUrl1["result"]["properties"]["name"]
	    p4.innerText=`Home World: ${randomW}`
	    } catch(error){
		console.log(error.message)
	}
}

