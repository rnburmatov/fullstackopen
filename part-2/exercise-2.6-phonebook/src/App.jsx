import { useState, useEffect } from 'react'
import axios from 'axios';

import './main.css';

import Filter from './components/Filter';
import Form from './components/Form';
import List from './components/List';
import Added from './components/Added';
import Error from './components/Error';

import entriesServices from './services/entriesServices';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [added, setAdded] = useState(null);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    const newPersons = entriesServices.getAll().then(initialPersons => setPersons(initialPersons));
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const doubleNames = persons.filter(person => person.name === newName);
    const url = `http://localhost:3001/persons`;
    const newEntry = {
      name: newName,
      number: newNumber
    }

    if (doubleNames.length > 0) {
      const confirmedChange = confirm(`${newName} is already added! Do you want to change number?`);
      if (confirmedChange) {
        entriesServices.change(doubleNames[0].id, newEntry).then(
          changedEntry => setPersons(persons.map(p => p.id !== doubleNames[0].id ? p : changedEntry))
        ).catch(error => {
          setAdded(null);
          setErrorText('Already deleted');
          setTimeout(() => {
            setErrorText(null);
          }, 5000)
        })
        setAdded(newName);
        setTimeout(() => {
        setAdded(null);
        }, 3000);
      }
    } else {
      entriesServices.create(newEntry).then(returnedNewEntry => setPersons(persons.concat(returnedNewEntry)))
      setAdded(newName);
      setTimeout(() => {
      setAdded(null);
      }, 3000);
    }

    

    setNewName('');
    setNewNumber('');
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
    const confirmDelete = confirm('Do you want to delete this entry?');
    if (confirmDelete) {
      entriesServices.deleteItem(id);
      setPersons(persons.filter(person => person.id !== id));
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <Added name={added}/>
      <Error message={errorText} />

      <h2>Add new entry</h2>
      <Form handleFormSubmit={handleFormSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <List persons={persons} filter={filter} deleteHandler={handleDelete}/>
    </div>
  )
}

export default App
