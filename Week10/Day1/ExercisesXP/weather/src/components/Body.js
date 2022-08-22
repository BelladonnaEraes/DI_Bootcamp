import {useState, useEffect} from 'react'
import './body.css'

const Body =()=> {
const [city, setCity] =useState('')
const [search, setSearch]=useState({})
const getCity =(e)=> {
  setCity(e.target.value)
}
let handleClick=()=>{

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8f2b62e17msh90d15266ff2a529p1bcec6jsn22365b29d2fc',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`, options)
	.then(response => response.json())
	.then(data=>{
        setSearch(data)
      console.log(data)
    })
	.catch(err => console.error(err));
}
console.log(search)
  return(
    <>
    <div className="form">
    <input onChange={getCity}/>
    <button onClick={handleClick}>Search</button>
    </div>

      <div className="datashow">

      <section className="current">
        <img src={search.current&&search.current.condition.icon}/>
        <div>
        <h6>{search.location&&search.location.name}</h6>
        <h6>{search.current&&search.current.temp_c} °C</h6>
        </div>
      </section>

     <h1>{search.current&&search.current.condition.text}</h1>

      <section className='forecast'>
          {search.forecast&&search.forecast.forecastday.map((item, i)=>{
            return(
              <>
              <div key={i}>
                <div>{item.date}</div>
                <div>{item.day.avgtemp_c} °C</div>
                <div>{item.day.condition.text}</div>
              </div>
              </>
            )
          })}
      </section>

      </div>

    </>
  )
}
export default Body
