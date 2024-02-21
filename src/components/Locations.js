import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ImLocation } from "react-icons/im";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `cd20a2207cc025aec33515aafb67a2ff`;

function Locations() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [responseData, setResponseData] = useState(null); 

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
    }, []) 

    useEffect(() => {
      if (latitude && longitude) { 
        let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
        axios.get(finalAPIEndPoint)
          .then((response) => {
            setResponseData(response.data)
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      }
    }, [latitude, longitude]) 

  return (
    <div className='App justify-start flex w-full '>
        {responseData && responseData.name && (
          <div className='flex justify-center items-center '>
          <h2 ><ImLocation /></h2>
          <h2 className=' text-[1.5rem]'>{responseData.name}</h2>
          </div>
        )}
      </div> 
  );
}

export default Locations