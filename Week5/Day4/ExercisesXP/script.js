/*
 Exercise 1: Conversion
Instructions
Convert the below promise into async await:
*/


async function function_name() {
	let result = await fetch("https://www.swapi.tech/api/starships/9/")
	let obj = await result.json()
    console.log(obj)
}

function_name()

/*
Analyse the code provided above before executing it - what will be the outcome?
*/

function resolveAfter2Seconds() { 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved'); 
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds(); 
    console.log(result);
}

asyncCall(); 

// it will be 
// "calling"
//"resolved"