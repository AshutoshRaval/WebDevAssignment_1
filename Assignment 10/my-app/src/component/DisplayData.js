
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import DisplayHourly from './DisplayHourly';


function DisplayData(props) {
  //   const [weatherData, setWeatherData] = useState(null);
  //   const Navigate = useNavigate();
  const Navigate = useNavigate();
  //const [weatherData, setWeatherData] = useState(null);

  //   useEffect(() => {
  //     //const cityname = searchQuery;
  //     //console.log(cityname)
  //     const fetchData = async () => {
  //       const response = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=ca9cb3590842d53bad5b13362a6ec988`
  //         // `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ca9cb3590842d53bad5b13362a6ec988`
  //       );
  //       // setWeatherData(response.data.list.filter((reading) => reading.dt_txt.includes('12:00:00')));
  //       setWeatherData(response.data);
  //     };

  //     fetchData();
  //   }, []);

  // const navigationHandler = (varDate) =>{
  //   Navigate("/DisplayHourly");
  // }

  //   if (!weatherData) {
  //     return <div>Loading...</div>;
  //   }

  return (
    // <input>
    <div >
      <h1 className='headers'>5-Day Weather Forecast for {props.data.city.name}</h1>
      <div className='dataDiv'>
        {props.data.list.map((item) => (

          item.dt_txt.includes('12:00:00') && (

            // const vale = item_dt.text.
            <div className='Weather_details'>
              <div key={item.dt}>
                <p>Date: {item.dt_txt}</p>
                <p>High Temperature: {item.main.temp_max} °F</p>
                <p>Low Temperature: {item.main.temp_min} °F</p>
                <p>Feels like: {item.main.feels_like}</p>
                <p>Wind Speed: {item.wind.speed}</p>
                <p>Weather: {item.weather[0].description}</p>
                
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                /><br>
                </br>
                {/* <DisplayHourly date={item.dt_txt}></DisplayHourly> */}
                {/* <div><button onClick={navigationHandler({item.dt})} >Details</button></div> */}
                <button className='buttonDiv' onClick={() => { props.toggle(item.dt_txt); Navigate("/" + item.dt_txt) }}>Details</button>
              </div>
            </div>
          )

        ))}

      </div>
     
    </div>
  );
}

export default DisplayData;
