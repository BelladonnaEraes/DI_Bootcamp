/*Exercise 1 : Reading From A File In Node.JS
Instructions
Create a text file and write something inside (example: ‘Some Text To See’)
Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal
*/


const fs = require("fs");
//let readFile = fs.readFileSync("Sometext.txt", "utf8")
//console.log(readFile)


/*Exercise 2 : Writing Files With Node JS
1.Instructions
2.Create an fs.js file, and use the Node js File System to create a new text file and write to it.
Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
Use the Node js File System to delete the file.*/

/*fs.open('data.txt', 'w', (err) => {
	if(err) throw err;
	console.log("all good!")
})*/

/*fs.appendFile("data.txt", "Bla bla bla bla", (err) => {
	if(err) throw err;
	console.log("all good!")
})*/


//let readFile = fs.readFileSync("data.txt", "utf8")
//console.log(readFile)


//fs.appendFile("data.txt", "Some more Bla bla bla bla", (err) => {
//	if(err) throw err;
//
//})


/*fs.unlink ('data.txt', (err) => {
	if(err) throw err;

})*/







