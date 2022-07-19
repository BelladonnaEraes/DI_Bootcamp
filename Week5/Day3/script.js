

const checkPar = function(input) {
	const checkInput = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof input ==="string"){
				resolve(input.toUpperCase())
			}else{
				reject(`error${input}`)
			}
		}
		,5000)
		})
	return checkInput
}
checkPar("Hello")
.then(res => console.log(res+res))
.catch(error => console.log(error))

checkPar("44")
.then(res => console.log(res+res))
.catch(error => console.log(error))


