import {useState, useEffect} from 'react'

const Favlist=()=>{
  let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }
  let allData=[]
  values.map((item)=>{
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': 'a8f2b62e17msh90d15266ff2a529p1bcec6jsn22365b29d2fc',
    		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    	}
    };

    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${item}&days=5`, options)
    	.then(response => response.json())
    	.then(data=>{
            allData.push(data)
        })
    	.catch(err => console.error(err));
    }
  )

  const [city, setCity] = useState(allData)
  useEffect(() => {
   console.log(allData)
  }, );
return(
  <>
  <div style={{display:'flex'}}>
  {city.map((city, i)=>{
    return(
      <div style={{border:'solid 1px black', margin:'10px', padding:'10px', textAlign:'center'}} key={i}>
      <h2>{city.location&&city.location.name}</h2>
      <p>{city.current&&city.current.temp_c}</p>
      <i>{city.current&&city.current.condition.text}</i>
      </div>
    )
  })
  }
  </div>
  </>
)
}

export default Favlist
