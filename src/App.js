import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';

import GET_WEATHER from './apollo/queries/getWeather';
import WeatherContainer from './components/WeatherContainer';

const App = () => {
  const [openAlert, setAlert] = useState(false);
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const { data, loading, error } = useQuery(GET_WEATHER, {
    variables: { country: query },
  });

  useEffect(() => {
    setWeather(data && data.getWeather);
  });

  const search = (e) => {
    setCountry(e.target.value);
    if (e.key === 'Enter') {
      setQuery(country);
      localStorage.setItem(`${country}_weather`, JSON.stringify(weather));
      setCountry('');
      setWeather({});
      setAlert(true);
    }
  };

  return (
    <WeatherContainer
      weather={weather}
      country={country}
      search={search}
      openAlert={openAlert}
      setAlert={setAlert}
      loading={loading}
      error={error}
    />
  );
};

export default App;
