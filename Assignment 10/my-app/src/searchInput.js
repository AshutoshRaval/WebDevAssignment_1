import React, { useState } from 'react';
import image1 from './img/LogoWeather.png'

function SearchInput(props) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='NavBar'>
      <div className='logo'>
      <img src={image1} className="img-fluid" />
      </div>
      <div className='appName'>
        <p >
          My WeatherApp
        </p>
      </div>
      <div className='search'>
        <input 
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
     
        <button onClick={() => { props.prpcityname(searchQuery); }}>Search</button>
      </div>
    </div>
  );
}

export default SearchInput;