import React, { useState } from 'react'
import { useGetLocationQuery } from '../../features/locationApi'
import { useGetWeatherInfoQuery } from '../../features/weatherApi'

const SearchBox = ({wHandler}) => {
  const [city, setCity] = useState()
  const [selectedCity, setSelectedCity] = useState("")

    const { data, error, isLoading } = useGetLocationQuery(city)

    
    const handlerSelectedCity = (selectedCity)=>{

      wHandler(selectedCity)
      setSelectedCity("")
      setCity("")
    }

  return (
    <> <div className='flex'>
      <div >
        <div className='relative'>
        <input className='py-1 px-2 outline-none border border-slate-500' 
        type="Search..." 
        placeholder="What your city"
        value={selectedCity?selectedCity:null}
        onChange={(e)=>setCity(e.target.value)} />

        <button className='px-3 py-1 bg-slate-500 rounded-none absolute translateX-50' onClick={()=>handlerSelectedCity(selectedCity)}>Set</button>

        </div>
{ isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
      {
        data.map((d)=>{
         return <div className='flex flex-col '>
          <i className='list-none py-1 px-2 text-left  border border-slate-400 hover:bg-slate-400 w-full cursor-pointer float-left' 
          >
            <h3 onClick={(e)=> setSelectedCity(`${d.name}, ${d.country}`)}>{d.name}, {d.country}</h3></i>

         </div>
 
        })
      }

        </>
      ) : null}

      </div>
  </div></>
  )
}

export default SearchBox;