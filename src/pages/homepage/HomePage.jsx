import {React, useState} from 'react'
import { useGetWeatherInfoQuery } from '../../features/weatherApi';
import { useGetLocationQuery } from '../../features/locationApi';
import SearchBox from '../../components/search/SearchBox';
import Weather from '../../components/weather/Weather';

const HomePage = () => {
  const [cityInfo, setCityInfo] = useState()
  const [weather, setWeather] = useState()

const weatherHandler = (city)=>{
if(city?.length>0){
  setWeather(city)
}else{
  alert("Invalid city name")
}
}


  return (
    <>
     <div className=''>
      <SearchBox wHandler={weatherHandler} />

      </div>
      <div>
        <Weather weather={weather} />
      </div>
   
    </>
   
  )
}

export default HomePage