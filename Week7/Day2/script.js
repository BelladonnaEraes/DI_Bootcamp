console.log('Hello')
function getProduct() {
	fetch("http://localhost:4000/api/products")
	.then(res=>res.json())
	.then(data=>{
		console.log(data)
		addGetProduct(data)
	})
}
getProduct()

function addGetProduct(arr) {
	const div = document.getElementById("div")
	arr.forEach((item, i) =>{
		
		const h2 = document.createElement('h2')
		h2.innerText = item.name
		div.appendChild(h2)})
}

function searchProduct() {
	const textSearch = document.getElementById('search').value;
	fetch(`http://localhost:4000/api/products/serch/?q=${textSearch}`)
	.then(res=>res.json())
	.then(data=>{
		console.log(data)
		addGetProduct(data)
	root.innerHTML = " "
	const div = document.getElementById("div")
	arr.forEach((item, i) =>{
		
		const h2 = document.createElement('h2')
		h2.innerText = item.name
		div.appendChild(h2)})

}