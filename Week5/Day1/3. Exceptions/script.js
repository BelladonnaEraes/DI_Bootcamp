// let username = "John";

// console.log(age); //ERROR: undefined
// console.log(username); //not executed

// // ---------------------------
// // Error handling
// // ---------------------------

// const err = new Error("Something bad happened!");
// console.log(err);
// console.log(err.message, err.name, err.stack)
// console.log("hello") // code reached because the error is created, not thrown

// // --------------------- Uncaught

// throw new Error("Something bad happened!"); //error is thrown - it becomes an exception
// console.log("after the err") // not reached

// //--------------------- try/catch

function calculator(a,b){
	console.log("a is : ", a, "b is : ", b , "-----------")
	try {
		let result;

		if (b !== 0) {
			result = a/b;
		} else {
			throw new RangeError("You cannot divide by Zero")
		}

		console.log("result : ", result)
	} catch (error) {
		console.log(error.message)
	} finally {
		console.log("-----CALCULATOR---------")
	}
}


calculator(2,0);
// You cannot divide by Zero
// -----CALCULATOR---------

for (let i = 0; i<5; i++){
	console.log(i)
}

// calculator(2,3);
// 2/3 
//"-----CALCULATOR---------"




// console.log("CALCULATOR AFTER")

// //--------------------- try/catch

function checkEmail(emailUser){
	console.log("emailUser", emailUser) //"johnsmith.com"
	try {
		if(emailUser.includes("@")){
			console.log("correct email")
		} else {
			// because the condition is false
			throw new SyntaxError("you are missing the @") //throw an exception
		}
	} catch (error) {
		// caught here
		// error is what was thrown in the try
		console.log(error.message) //"you are missing the @"
	}
}

checkEmail("johnsmith.com") // throw an exception that is caught
checkEmail("john@smith.com")  // will still run because the exception was caught
