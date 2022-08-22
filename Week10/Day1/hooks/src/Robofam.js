import {useState, useEffect} from 'react'
import {Link } from "react-router-dom"

const Robofam =()=>{
  const [robo,setRobo] =useState([])
  const [name, setName] =useState([])

useEffect(()=>{
  getRobo()
},[])

  const getRobo =()=>
{  fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data=> {
        setRobo(data)
      })
      .catch(err=> console.log(err))}
  return(
    <>
     <div>{robo.map(item=> {
       return(
      <Link key={item.id} to={`/posts/${item.id}`} >
      <div  style={{color:'white'}}>
          {item.username}</div>
         </Link>
       )
     })}</div>
    </>
  )
}

export default Robofam
