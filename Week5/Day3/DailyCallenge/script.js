/*1rst Daily Challenge
Create two functions. Each function should return a promise.
The first function called makeAllCaps(), takes an array of 
words as an argument
If all the words in the array are strings, resolve the promise. 
The value of the resolved promise is the array of words uppercased.
else, reject the promise with a reason.
The second function called sortWords(), takes an array of words 
uppercased as an argument
If the array length is bigger than 4, resolve the promise. 
The value of the resolved promise is the array of words sorted in
 alphabetical order.
else, reject the promise with a reason.
*/

function makeAllCaps(arr) {
	let newArr = arr.every(element => {
		if (typeof element === 'string') {
			return true;
		}
	})
	let promisCaps = new Promise((resolve, reject) => {
		if(newArr === true) {
			resolve (arr.map((element) => {return element.toUpperCase()}))
		} else {
			reject ("Something wrong")
		}
	})
	.then((arr) => console.log(arr))
      .catch(error => console.log(error))
}
makeAllCaps([4, "pear", "banana"])
makeAllCaps(["apple", "pear", "banana"])

function sortWords(array) {
	let promisAlfabet = new Promise((resolve, reject) => {
		if(array.length>4) {
			resolve (array.sort())
		} else {
			reject ("Something wrong")
		}
	})
	.then((arr) => console.log(arr))
      .catch(error => console.log(error))
}
sortWords(["apple", "pear", "banana", "melon", "kiwi"])

/*2nd Daily Challenge

Create three functions. The two first functions should return a promise..

The first function is named toJs():
this function converts the morse json string provided above to a morse javascript object.
if the morse javascript object is empty, throw an error (use reject)
else return the morse javascript object (use resolve)

The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

This function asks the user for a word or a sentence.
if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
else return an array with the morse translation of the user’s word.

*/
let morse = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}



function toJs(convert) {
	let morzeObj
	let convMorse = new Promise((reject, resolve) => {
		if(convert = '') {
			reject ("Something wrong")
		} else {
			morzeObj= JSON.parse(convert)
			resolve (morzeObj)
		}
	})
	.then((obj) => console.log(obj))
      .catch((error) => console.log(error))
}
toJs(morse)







