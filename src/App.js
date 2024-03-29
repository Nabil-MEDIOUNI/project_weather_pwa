import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';

import GET_WEATHER from './apollo/queries/getWeather';
import WeatherContainer from './components/WeatherContainer';

const App = () => {
  const [openAlert, setAlert] = useState(false);
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [wifi, setWifi] = useState('online');
  const [wifiError, setWifiError] = useState({
    message: '',
  });

  const { data, loading, error } = useQuery(GET_WEATHER, {
    variables: { country: query },
  });

  useEffect(() => {
    if (error?.message !== undefined) {
      setWifiError({ message: error?.message });
    }

    if (error?.message === 'Network error: Failed to fetch') {
      const getLocalData = localStorage.getItem(`${query}_weather`);
      setWifiError({ message: "GraphQl Error: You're working offline" });
      setWifi('offline');
      if (getLocalData !== undefined) setWeather(JSON.parse(getLocalData));
    }

    if (data !== undefined) {
      setWeather(data?.getWeather);
      if (!error) localStorage.setItem(`${query}_weather`, JSON.stringify(data?.getWeather));
    }
  }, [country, data, error, query]);

  const search = (e) => {
    setCountry(e.target.value);
    if (e.key === 'Enter') {
      setQuery(country);
      setCountry('');
      setWeather({});
      setAlert(true);
      setWifiError('');
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
      error={wifiError}
      wifi={wifi}
    />
  );
};

export default App;
