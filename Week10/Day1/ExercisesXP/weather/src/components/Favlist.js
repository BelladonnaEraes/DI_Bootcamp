import {useState, useEffect} from 'react'

const Favlist=()=>{
const [citystore, setCitystore]=useState([])

useEffect(() => {
  const citystore = JSON.parse(localStorage.setCitystore('city'));
  if (citystore) {
   setCitystore(citystore);
  }
}, []);
return(
  <>
  Hello
  </>
)
}

export default Favlist
