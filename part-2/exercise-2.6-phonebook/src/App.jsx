import { useState, useEffect } from 'react'
import axios from 'axios';

import Filter from './components/Filter';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const promise = axios.get('http://localhost:3001/persons').then(response => setPersons(response.data))
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const doubleNames = persons.filter(person => person.name === newName);

    if (doubleNames.length > 0) {
      alert(`${newName} is already added!`)
    } else {
      setPersons(persons.concat({
        name: newName,
        number: newNumber,
        id: newName
      }));
    }
  }
  
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add new entry</h2>
      <Form handleFormSubmit={handleFormSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <List persons={persons} filter={filter} />
    </div>
  )
}

export default App
