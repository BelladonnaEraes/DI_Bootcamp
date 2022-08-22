import {useState} from 'react'


const Count =(props)=>{
  const [count,setCount] =useState(0)
  return(
    <>
    <div><button onClick ={()=>setCount(count-1)}>-</button>
    {count}
    <button onClick ={()=>setCount(count+1)}>+</button>
    </div>
    </>
  )
}

export default Count
