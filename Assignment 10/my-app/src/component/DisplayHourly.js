// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayHourly = (props) => {


  // const [weatherData, setWeatherData] = useState(null);
  // setWeatherData(props.data);
  // if (!weatherData) {
  //   return <div>Loading...</div>;
  // }
  // useEffect(() => {
  //   //const cityname = searchQuery;
  //   //console.log(cityname)
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=ca9cb3590842d53bad5b13362a6ec988`
  //       `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ca9cb3590842d53bad5b13362a6ec988`
  //     );
  //     // setWeatherData(response.data.list.filter((reading) => reading.dt_txt.includes('12:00:00')));
  //     setWeatherData(response.data);
  //   };

  //   fetchData();
  // }, []);

  return (
    // <input>
    <div>
      <h1 className='headers'>Hourly Weather Forecast for {props.data.city.name}</h1>
      <div class="container">
        <div class="row">

          {props.data.list.map((item) => (

            item.dt_txt.includes((props.date)) && (

              <div className='Weather_details_Hourly col-3'>
                {/* <div key={item.dt}> */}
                <p>Date: {item.dt_txt}</p>
                <p>High Temperature: {item.main.temp_max} °F</p>
                <p>Low Temperature: {item.main.temp_min} °F</p>
                <p>Weather: {item.weather[0].description}</p>
                <p>Feels like: {item.main.feels_like}</p>
                <p>Wind Speed: {item.wind.speed}</p>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
                {/* </div> */}
              </div>
            )

          ))}

        </div>


      </div>
    </div>
  );
}

export default DisplayHourly