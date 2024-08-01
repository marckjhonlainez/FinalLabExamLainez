import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weatherData.city}</Typography>
        <Typography variant="body2">Temperature: {weatherData.temp}°C</Typography>
        <Typography variant="body2">Condition: {weatherData.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
