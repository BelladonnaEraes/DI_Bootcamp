import db from '../connections/db.js'


export const getAllCustomers = (req, res)=>{
  db("customer")
  .select('customer_id', 'first_name', 'last_name')
  .orderBy('first_name')
  .limit(50)
  .then(rows=>{
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
    res.json({msg:'Error'})
  })
}

export const searchCustomrs =(req, res)=>{
  db("customer")
  .select('customer_id', 'first_name', 'last_name')
  .orderBy('first_name')
  .whereILike('first_name', `${req.query.name}%`)
  .limit(50)
  .then(rows=>{
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
    res.json({msg:'Error'})
  })
}

export const getCustomersData=(req, res)=>{
  db("customer")
  .select('customer_id', 'first_name', 'last_name', "email", "addresss", "city",
  "district", "country")
  .join('address', 'address.address_id', "=", "customer.address_id")
  .join('city', 'city.city_id', "=", "address.city_id")
  .join('country', 'country.country_id', "=", "city.country_id")
  .where({customer_id:req.params.id})
  .then(rows=>{
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
    res.json({msg:'Error'})
  })

}
