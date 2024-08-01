import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import axios from 'axios';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response.data.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchForm onSearch={fetchWeather} />
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
