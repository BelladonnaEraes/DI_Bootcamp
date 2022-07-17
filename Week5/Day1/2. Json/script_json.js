// // //--------------------------
// // // JSON
// // // -------------------------

// data is sent and received by using JSON format
// client and server communicate-in order for example for the server
// to send data to the client -we use JSON

// USE OF JSON METHODS

// HTTP REQUEST 
// Javascript data that we want to pass the the server, to be saved to the DB for example
// we will need to stringify the data
// because the only data type that we communicate is type string

// AND HTTP RESPONSE
// JSON data that is want from the server to the cliet ot be displayed on the page 
// for example
// we will need to parse the data
// because the only data type that we communicate is type string

// // --------------
// //convert a JSON string into a JS object
// // -------------

// SYNTAX
// JSON.parse(pass the json string)

const fromjson = '{"result":true, "count":42}'; //JSON STRING
console.log(fromjson)

const toobj = JSON.parse(fromjson); 
console.log(toobj)
// retrieve the value of the count key
console.log(toobj["count"])
console.log(toobj.count);
console.log("typeof(fromjson) : ", typeof(fromjson), " typeof(toobj) : ", typeof(toobj))


// // // --------------
// // //convert a JS object into a JSON string 
// // // -------------

// // SYNTAX
// // JSON.stringify(pass the js obj)

const fromobj = {username:"John", age:25};
console.log(typeof fromobj)
const tojson = JSON.stringify(fromobj)
console.log(typeof tojson)

// // // --------------
// // // Example in class 
// // // -------------

const jsonStringOne = `{
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
}`

// convert it to a js object

const getEmployee = function (){
	let employeeObj = JSON.parse(jsonStringOne);

	for(let employee of employeeObj["employees"]){
		console.log(employee["firstName"], employee["lastName"])
		// add the names of the employees to the DOM
	}

}

getEmployee()

// // --------------
// // Exercise
// // -------------


// 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object. Console.log the variable
// 4. Then use pretty print (look at the lesson)

let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`


const manipulateJson =  (function () {
	let quizObj = JSON.parse(jsonString);
	let retrieveAllOptions = quizObj["quiz"]["sport"]["q1"]["options"];

	//obj destructuring
	// const {
	// 	quiz : 
	// 		{sport : 
	// 			{ q1 : 
	// 				{options}
	// 			}
	// 		}
	// 	}  = quizObj

	// retrieveAllOptions.forEach((element) => console.log(element))


	//stringify - converts a JS object to a JSON string
	// null in the stringify method means that the JSON string needs to contains
	// exactly the same values as the JS object
	let stringQuiz = JSON.stringify(quizObj, null, 2)
	console.log(stringQuiz)
})()


// // ----------------------
// // JSON SOLUTION TO A DEEP CLONE
// // -----------------------


// // // WITH OBJECTS

let myObj = {
	username : "John",
	friends : {
		names : "Harry"
	}
}


// SPREAD IS NOT ENOUGH FOR A DEEP CLONE
let myNewObj = {...myObj};

myNewObj["username"] = "Summer";
console.log(`The first value of myObj is ${myObj["username"]}, 
            The first value of myNewObj is ${myNewObj["username"]}`)

myNewObj["friends"]["names"] = "Autumn";
console.log(`The value of myObj is ${myObj["friends"]["names"]}, 
            The value of myNewObj is ${myNewObj["friends"]["names"]}`)


//SOLUTION FOR DEEP CLONE
//first stringify then parse
let myNewObjDeepClone = JSON.parse(JSON.stringify(myObj))
myNewObjDeepClone["friends"]["names"] = "Tom";
console.log(myNewObjDeepClone)
console.log(myObj)


// // WITH ARRAYS


// //SHALLOW COPY BY VALUE
// //Using Spread Operator is NOT good for array containing nested arrays

let superMarket = ["shampoo", ["chocolate", "vanilla"]];
let cart = [...superMarket];
//will change my first item to "soap" in the cart array
//but won't change the item in the superMarket array
cart[0] = "soap"
console.log(cart); //["soap", ["chocolate", "vanilla"]];
console.log(superMarket) //["shampoo", ["chocolate", "vanilla"]];

// //will change the chocolate to caramel
// //and WILL change the item in the superMarket array
cart[1][0] = "caramel"
console.log(cart); //["soap", ["caramel", "vanilla"]];
console.log(superMarket) //["shampoo", ["caramel", "vanilla"]];


// //DEEP COPY BY VALUE
// //Using JSON.stringify and JSON.parse is good for array containing nested arrays
let superMarketIsrael = ["shampoo", ["chocolate", "vanilla"]];
let cartIsrael = JSON.parse(JSON.stringify(superMarketIsrael))
				//1. First, we stringify the superMarketIsrael array
				//2. Then we pass the new json string as an argument of the parse method
				// The notion is called COMPOSING
//will change the chocolate to caramel in the cartIsrael array
//and WON'T change the item in the superMarketIsrael array
cartIsrael[1][0] = "caramel"
console.log(cartIsrael); //["shampoo", ["caramel", "vanilla"]];
console.log(superMarketIsrael) //["shampoo", ["chocolate", "vanilla"]];
