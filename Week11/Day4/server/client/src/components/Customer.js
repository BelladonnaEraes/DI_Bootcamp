import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Customer =(param)=>{
  const [customer, setCustomer]= setState([])
  const params = useParams()

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{
 try{
   const result = await axios.get(`/customer/${params.id}`)
   console.log(result.data)
 }catch(e){
  console.log(e)
 }

  }
  return(
    <>
    <div>
    {
      customer.length === 0?
      ('no data'):
      (
        <div>{
          {customer[0].first_name}
        }</div>
      )
    }
    </div>
    </>
  )
}

export default Customer
