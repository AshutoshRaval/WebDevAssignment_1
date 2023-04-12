import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import SearchInput from './component/Search';
import DisplayData from './component/DisplayData';
import SearchInput from './searchInput';
import DisplayHourly from './component/DisplayHourly';
import { BrowserRouter as Router, Route , Routes,useNavigate} from 'react-router-dom';


function App() {

// const Navigate = useNavigate();

  const [weatherData, setWeatherData] = useState(null);
  const [insertPath,setPath] = useState('');
  
  const [cityName_Sate, setCityName_State] = useState('');
  const [ApiLink,setApiLink] = useState('https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=ca9cb3590842d53bad5b13362a6ec988')
 // var varLink = `https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=ca9cb3590842d53bad5b13362a6ec988`

const toggle=(name)=>{
  // console.log("hello"+name)
  //alert(name)
  setPath(name);
  // Navigate("/"+insertPath)
}   

const func1_setCityName=(cityName1)=>{
  //alert('setCityNAME');
 // setCityName_State(cityName1);
  console.log(cityName1)
  
  setApiLink(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName1}&appid=ca9cb3590842d53bad5b13362a6ec988`)

}

useEffect(() => {
      //const cityname = searchQuery;
      //console.log(cityName_Sate)
     // const varLink = "";
      const fetchData = async () => {
        //console.log(cityName_Sate)
        // if(cityName_Sate == ''){

        //    varLink = "https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=ca9cb3590842d53bad5b13362a6ec988"
        // }
        // else{
        //  // varLink = "https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=ca9cb3590842d53bad5b13362a6ec988"
        //   const varLink = "https://api.openweathermap.org/data/2.5/forecast?q=${cityName_Sate}&appid=ca9cb3590842d53bad5b13362a6ec988"
        // }
        const response = await axios.get(
          //`https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=ca9cb3590842d53bad5b13362a6ec988`
          // `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ca9cb3590842d53bad5b13362a6ec988`
          //`https://api.openweathermap.org/data/2.5/forecast?q=${cityName_Sate}&appid=ca9cb3590842d53bad5b13362a6ec988`
          ApiLink
          );
          console.log(response.data)
        // setWeatherData(response.data.list.filter((reading) => reading.dt_txt.includes('12:00:00')));
        setWeatherData(response.data);
      };
  
      fetchData();
    }, [ApiLink]);
  



    if (!weatherData) {
      return <div>Loading...</div>;
    }
  

  // const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=boston&appid=ca9cb3590842d53bad5b13362a6ec988`
  //       // `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ca9cb3590842d53bad5b13362a6ec988`
  //     );
  //     // setWeatherData(response.data.list.filter((reading) => reading.dt_txt.includes('12:00:00')));
  //     setWeatherData(response.data);
  //   };

  //   fetchData();
  // }, []);

  // if (!weatherData) {
  //   return <div>Loading...</div>;
  // }



  return (
    // <input>
    // <SearchInput></SearchInput>
    // <div>
    //   <h1>5-Day Weather Forecast for {weatherData.city.name}</h1>
    //   {weatherData.list.map((item) => (

    //     // <div key={item.dt}>
    //     //   <p>Date: {item.dt_txt}</p>
    //     //   <p>High Temperature: {item.main.temp_max} °F</p>
    //     //   <p>Low Temperature: {item.main.temp_min} °F</p>
    //     //   <p>Weather: {item.weather[0].description}</p>
    //     //   <img
    //     //     src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
    //     //     alt={item.weather[0].description}
    //     //   />
    //     // </div> 

    //     item.dt_txt.includes('12:00:00') && (

    //       <div className='Weather_details'>
    //         <div key={item.dt}>
    //         <p>Date: {item.dt_txt}</p>
    //         <p>High Temperature: {item.main.temp_max} °F</p>
    //         <p>Low Temperature: {item.main.temp_min} °F</p>
    //         <p>Weather: {item.weather[0].description}</p>
    //         <img
    //           src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
    //           alt={item.weather[0].description}
    //         />
    //       </div>
    //       </div>
    //     )

    //   ))}
    // </div>
    // <div>  
    // <SearchInput></SearchInput>
    // <DisplayData></DisplayData>
    // {/* <DisplayHourly date={'2023-04-08'}></DisplayHourly> */}
    // {/* <Test date={'2023-04-08'}></Test> */}
    // {/* <DisplayHourly date={'2023-04-08'}></DisplayHourly> */}
    // </div>
<>
{/* <BrowserRouter>
<Switch>
<Route path="/" element={<div><SearchInput></SearchInput><DisplayData></DisplayData> </div>} />
</Switch>
</BrowserRouter>           */}
<Router>
  <Routes>
    <Route path="/" element={<div><SearchInput prpcityname={func1_setCityName}></SearchInput><DisplayData data={weatherData} toggle={toggle}></DisplayData> </div>} />
    <Route path={insertPath} element={<div><DisplayHourly data={weatherData} date={insertPath.toString().substring(0,10)} ></DisplayHourly></div>} />
    {/* <Route path="/Sunday" element={<div><HourlyForecast></HourlyForecast> </div>} /> */}
  </Routes>
</Router>

</>           
   );
  }
  
  export default App;          
       

          
         
                    
         



