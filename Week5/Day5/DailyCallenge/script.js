let fromSelector = document.querySelector("#from")
let toSelector = document.querySelector("#to")
let option

async function fromSelector0() {
	let listCurr = await fetch("https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes")
	let doclistCurr = await listCurr.json()
	let doclistCurr0_99 = doclistCurr["supported_codes"]
	//console.log(doclistCurr)
	let listOfselector = doclistCurr0_99.forEach((elem) => {
		option = document.createElement("option")
		fromSelector.appendChild(option)
		option.innerText =`${elem[0]} ${elem[1]}`
		option.value=`${elem[0]}`
		
	} )
}
fromSelector0()

//console.log(option.value)

async function toSelector0() {
	let listCurr1 = await fetch("https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes")
	let doclistCurr1 = await listCurr1.json()
	let doclist1Curr0_99 = doclistCurr1["supported_codes"]
	//console.log(doclist1Curr0_99)
	let listOfselector1 = doclist1Curr0_99.forEach((elem, i) => {
		option = document.createElement("option")
		toSelector.appendChild(option)
		option.innerText =`${elem[0]} ${elem[1]}`
		option.value=`${elem[0]}`
		
	} )	
}
toSelector0()

fromSelector.addEventListener("change", selectCurrrr) 
toSelector.addEventListener("change", selectCurrrr)

 function selectCurrrr() {
      let item = fromSelector.value
       let item1 = toSelector.value
       console.log(item, item1)
       //compairCurr(item, item1)
}

console.log(selectCurrrr())




/*async function compairCurr (first, second) {
	  let URLpair = `https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${first}/${second}`
      let twoCurr = await fetch(URLpair)
	  let twoCurr1 = await twoCurr.json()
}*/











