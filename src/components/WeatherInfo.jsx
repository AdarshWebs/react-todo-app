
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherInfo() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const city = 'London';
  const apiKey = 'ca5b0a244cd430839367bbc034e6a2da'; 

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then(response => {
        setWeather(response.data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch weather data.');
      });
  }, [city, apiKey]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Weather Information</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather ? (
        <div>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather info...</p>
      )}
    </div>
  );
}

export default WeatherInfo;
