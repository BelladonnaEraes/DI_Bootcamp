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

db('products')


.where({country_id:110})
.returning('*')
.then(data=>{
  console.log(data);
})
//.orderBy('country_id', 'desc')
.catch(e=>{
  console.log(e);
})