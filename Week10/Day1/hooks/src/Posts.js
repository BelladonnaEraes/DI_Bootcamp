
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'

import  Robofam from './Robofam.js'


const Posts =()=>{
  const [posts, setPosts]=useState([])
  const params = useParams()

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
      .then(response => response.json())
      .then(data=> {
        setPosts(data)
      })
      .catch(err=> console.log(err))
  },[])
  return(
    <>{
      posts.map(item=>{
        return(
          <div style={{borer:'white 1 px solid', padding:'10px', margin:'5px'}}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        )
      })
    }

    </>
  )

}


export default Posts
