const axios = require('axios')

const getData = async() => {
	try {
		let getUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
		return getUsers.data;
}catch (e) {
	console.log(e)
}
}
getData()

module.exports = {
	getData
}