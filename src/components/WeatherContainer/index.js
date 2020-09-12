import React from 'react';
import PropTypes from 'prop-types';

import './WeatherContainer.css';
import Alert from '../Alert';
import Loading from '../Loading';

const WeatherContainer = ({
  weather, search, loading, error, country, wifi, openAlert, setAlert,
}) => (
  <>
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        autoFocus
        value={country}
        onChange={search}
        onKeyPress={search}
      />
      {weather && weather.main && (
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
          {wifi !== 'offline' && <img
            className="city-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />}
          <p>{weather.weather[0].description}</p>
        </div>
      </div>
      )}
      {loading && <Loading />}
    </div>
    {Alert(error, openAlert, () => setAlert(false))}
  </>
);

WeatherContainer.propTypes = {
  weather: PropTypes.object,
  search: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
  openAlert: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

WeatherContainer.defaultProps = {
  weather: undefined,
  error: undefined,
};

export default WeatherContainer;
