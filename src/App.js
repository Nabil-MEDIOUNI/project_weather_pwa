import React, { useState } from 'react';
import { useQuery } from 'react-apollo';

import fetchWeather from './api/fetchWeather';
import GET_WEATHER from './apollo/queries/getWeather';
import './App.css';

const App = () => {
  const [country, setCountry] = useState('');
  const [wifi, setWifi] = useState('online');
  const [weather, setWeather] = useState({});

  const { data, error } = useQuery(GET_WEATHER, { variables: { country } });

  // const search = async (e) => {
  //   setCountry(e.target.value);
  //   if (e.key === 'Enter') {
  //     await fetchWeather(country)
  //       .then((body) => {
  //         setWeather(body);
  //         localStorage.setItem(`${country}_weather`, JSON.stringify(body));
  //         setCountry('');
  //       })
  //       .catch(() => {
  //         setWifi('offline');
  //         const getLocalData = localStorage.getItem(`${country}_weather`);
  //         setWeather(JSON.parse(getLocalData));
  //       });
  //   }
  // };

  const search = (e) => {
    setCountry(e.target.value);
    if (e.key === 'Enter') {
      setWeather(data && data.getWeather);
      localStorage.setItem(`${country}_weather`, JSON.stringify(data && data.getWeather));
      setCountry('');
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={country}
        onChange={search}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            {wifi === 'online' && (
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            )}
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
