import { useState, useEffect } from 'react'
import axios from 'axios';

import Filter from './components/Filter';
import Form from './components/Form';
import List from './components/List';

import entriesServices from './services/entriesServices';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const newPersons = entriesServices.getAll().then(initialPersons => setPersons(initialPersons));
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const doubleNames = persons.filter(person => person.name === newName);

    if (doubleNames.length > 0) {
      alert(`${newName} is already added!`)
    } else {
      const url = `http://localhost:3001/persons`;
      const newEntry = {
        name: newName,
        number: newNumber
      }
      entriesServices.create(newEntry).then(returnedNewEntry => setPersons(persons.concat(returnedNewEntry)))
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

  const handleDelete = (id) => {
    entriesServices.deleteItem(id);
    setPersons(persons.filter(person => person.id !== id));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add new entry</h2>
      <Form handleFormSubmit={handleFormSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <List persons={persons} filter={filter} deleteHandler={handleDelete}/>
    </div>
  )
}

export default App
