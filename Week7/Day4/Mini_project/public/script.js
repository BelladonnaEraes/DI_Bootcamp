
const sendData = () => {
  event.preventDefault()
  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;

  fetch('http://localhost:5003/shoplist',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({name,quantity})
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    appendData(data)

  })
  .catch(e=> {
    console.log(e);
  })
}
let arr = []
function appendData(arr1) {
	arr.push(arr1)
	arr.forEach((item) => {
	const root = document.getElementById('root');
	let div = document.createElement('div')
	root.appendChild(div)
    div.innerText = `${item[0].product_name}:${item[0].quantity}`;
	})
}










