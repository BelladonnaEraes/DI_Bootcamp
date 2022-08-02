const knex = require("knex")

const db = knex({
  client:'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: '123456',
    database:'dvdrental'
  }
})

/*db('country')
.del()
//.insert([
//{
//  country:"DI Lerning IL"
//},
//{
//  country:'Shauland'
//}
//])
//.select('country_id','country')
//.update({country:'Angola'})
.where({country_id:110})
.returning('*')
.then(data=>{
  console.log(data);
})
//.orderBy('country_id', 'desc')
.catch(e=>{
  console.log(e);
})*/



/*db('products')
.where({id:1})
.then(data=>{
  console.log(data);
})
.catch(e=>{
  console.log(e);
})*/

//Select
/*db('products')
.select('*')
.where({name:'iWatch'})
.then(data=>{
  console.log(data);
})
.catch(e=>{
  console.log(e);
})*/

//Update
/*db('products')
.update({name:'iWatch123'})
.where({name:'iWatch'})
.returning('*')
.then(data=>{
  console.log(data);
})
.catch(e=>{
  console.log(e);
})*/






