
function comparison (arr1, arr2) {
	let arr11 = Array.from(arr1).sort()	
	let arr22 = Array.from(arr2).sort()
	console.log(arr11.toString() === arr22.toString())
}

let Astr = "astronomer"
let Moon = "moonstarer"
let scoll = "schoolmaster"
let room = "theclassroom"
let code = "themorsecode"
let dots = "herecomedots"

comparison(Moon, Astr)
comparison(scoll, room)
comparison(code, dots)