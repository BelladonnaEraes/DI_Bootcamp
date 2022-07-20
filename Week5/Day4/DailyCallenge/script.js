/*
1st Challenge
Instructions
Implement a simple version of Promise.all.
This function should accept an array of promises and return an array of resolved values.
If any of the promises are rejected, the function should catch them.

Example
*/



/*2nd Challenge
Instructions
You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

In the HTML file, create a form with 4 inputs:
the latitude and longitude of the first city
the latitude and longitude of the second city

Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
Hint : Use Promise.all()
Try with Paris and New York

Paris
Latitude: 48.864716
Longitude: 2.349014

New York
Latitude: 40.730610
Longitude: -73.935242

*/

(function setEvents() {
	const form = document.getElementById("formCity");
	form.addEventListener("submit", retrieveInput);
})()

function retrieveInput (event) {
	event.preventDefault();
	const inputvalue1 = document.getElementById("firstcity1").value;
	const inputvalue2 = document.getElementById("firstcity2").value;
	const inputvalue3 = document.getElementById("secondcity1").value;
	const inputvalue4 = document.getElementById("secondcity2").value;
	getInfo(inputvalue1, inputvalue2, inputvalue3, inputvalue4)	
}

async function getInfo(Latitude1, Longitude1, Latitude2, Longitude2) {
	try { 
		let sunRise = await fetch(`https://api.sunrise-sunset.org/json?lat=${Latitude1}&${Longitude1}&date=today`)
	    let sunSetObj = await sunRise.json()
	    let sinRiseObj = sunSetObj["results"]["sunrise"]
	    let sunRise2 = await fetch(`https://api.sunrise-sunset.org/json?lat=${Latitude2}&${Longitude2}&date=today`)
	    let sunSetObj2 = await sunRise2.json()
	    let sinRiseObj2 = sunSetObj2["results"]["sunrise"]
	    pushSunRise(sinRiseObj, sinRiseObj2)
	} catch (error) {
		console.log (error, "WOW!!")
	} 
}

function pushSunRise(first, second) {
	let section = document.createElement("p")
	document.body.appendChild(section)
	let text1 = document.createTextNode(first)
	section.appendChild(text1)
	let section1 = document.createElement("div")
	document.body.appendChild(section1)
	let text2 = document.createTextNode(second)
	section1.appendChild(text2)
}












