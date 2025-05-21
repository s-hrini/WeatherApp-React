import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'
function App() {
  const KEY = '4e8170885c17a573d288a55fde7f7498';
  const [city, setCity] = useState("");
  const [data,setData] = useState();

  const fetchData = async () => {
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      setData(response.data);
    }
    catch(err){
        alert('Please Enter a City Name Correctly');
    }
  }

  return (
    <>
      <div className='container'>
        <br /><br />
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} className='search' placeholder='Enter the City Name'/>
        <button onClick={fetchData}>search</button>
        <div>
        {data && (
          <div className='container1'><br />
            <div className='weather-info'>
              {data.main.temp} C
              </div><br />
            <div className='city name'>{data.name} {data.sys.country}</div><br />
              <div>
                <div>Lat -  {data.coord.lat}</div>
                <div>Lon - {data.coord.lon}</div>
              </div>
          </div>
        )}
      </div>
       
      </div>
      <img src="data:image/jpeg;base64,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" alt="" />
      
    </>
  )
}

export default App
