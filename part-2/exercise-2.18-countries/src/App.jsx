import { useState, useEffect } from 'react';
import axios from 'axios';

import List from './components/List';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue) {
      axios.get('https://restcountries.com/v3.1/all').then(response => setCountries(response.data.filter(country => country.name.common.toLowerCase().includes(inputValue))));
    }
  }, [inputValue])

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <label htmlFor="countryInput">Find country: </label>
      <input value={inputValue} onChange={handleInput}/>
      <List countries={countries}/>
    </div>
  )
}

export default App
