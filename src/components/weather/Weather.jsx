import React, { useState } from 'react'
import { useGetWeatherInfoQuery } from '../../features/weatherApi'

const Weather = ({weather}) => {
    const [cityInfo, setCityInfo] = useState()
    const { data, error, isLoading } = useGetWeatherInfoQuery(weather)
  
  
  
  return (
    <>
        
        <div className='container mx-auto flex flex-col justify-center items-center h-screen w-100'>
     
     {error ? (
           <>Oh no, there was an error</>
         ) : isLoading ? (
           <>Loading...</>
         ) : data ? (
           <>
           <div className='w-100 flex flex-col justify-center items-center px-16 py-24 rounded-lg shadow-xl'>
             <h1>{data.name}</h1>
             <h3>{Math.floor(data.main.temp)}°C</h3>
             <p>Feels like: {Math.floor(data.main.feels_like)}°C</p>
             </div>
   
           </>
         ) : null}
       </div>
    </>
  )
}

export default Weather