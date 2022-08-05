const fs = require('fs');

const getData = () => {
	try {
		const products = fs.readFileSync(__dirname+'/products.json','utf-8')
		return JSON.parse(products)
	} catch(e) {
		return[]
	}
}
const setData = (arr) => {
  try{
    fs.writeFileSync(__dirname+'/products.json', JSON.stringify(arr));
  }
  catch(e){
    console.log(e);
  }
}
module.exports = {
  getData,
  setData
}