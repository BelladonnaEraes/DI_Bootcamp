const postData= () => {
const email = document.getElementById('emailpost').value;
const password = document.getElementById('passwordpost').value;

let obj = {
	email,
	password
}
fetch('http://localhost:4000/register', {
	method:'POST',
	headers: {
		'content-type': 'application/json'
	},
	body: JSON.stringify(obj) //or body: JSON.springify({email, password})
})
.then(res=> res.json())
.then(data => {
	console.log(data)
})

.catch(e=> {
	console.log(e)
})}

const getData=() => {
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


fetch(`http://localhost:4000/userlogin?email=${email}&password=${password}`)
.then(res=>res.json())
.then(data => {
	console.log(data)
	//const root = document.getElementById('root')
	//root.innerText = data.msg+" "+ data.status;

})
.catch(e=> {
	console.log(e)
})}