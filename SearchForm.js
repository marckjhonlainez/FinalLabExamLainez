import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
