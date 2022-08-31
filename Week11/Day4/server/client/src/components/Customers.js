import {useState, useEffect} from 'react'
import axios from 'axios'
import {Routes, Route, Link} from 'react-router-dom'

const Customers =(props)=>{
  const [custs, setCusts]=useState([])
  const [name, setName]=useState('')

useEffect(()=>{
  showCustomers()
},[])

  const showCustomers= async ()=>{
   try{
     const results = await axios.get('http://localhost:5001/customers')
     setCusts(results.data)
   }
   catch(e){
     console.log(e)
   }
  }

  const search =async(e)=>{
    e.preventDefault()
    try{
      const results = await axios.get(`http://localhost:5001/search?name=${name}`)
      setName(results.data)
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <div>
     <h1>Hello!</h1>
     <form onSubmit={search}>
     Search: <input type='text' onChange={(e)=>setName(e.target.value)}/>
     </form >
     {/*<button onClick={()=>showCustomers()}>Show List</button>*/}
     <div><div>
        {
          custs.map(item=>{
            return (
              <div style={{display:'flex'}}>
              <Link> 
              <div key={item.customer_id} style={{border:'1px white solid', margin:'10px'}}>
               {item.first_name} {item.last_name}
              </div>
             </div>
            )
          })
        }
     </div></div>
    </div>
  )
}


export default Customers
