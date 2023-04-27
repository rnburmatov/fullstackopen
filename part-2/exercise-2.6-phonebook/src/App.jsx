import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

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
      <div>
        <label htmlFor="filterNames">Filter by name: </label>
        <input value={filter} onChange={handleFilter}/>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="fullName">Enter full name:</label>
          <input type="text" id='fullName' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <label htmlFor="phoneNumber">Enter phone number:</label>
          <input type="text" id='phoneNumber' value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        filter ? persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase())).map(person => <li key={person.id}>{person.name} {person.number}</li>) : persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)
      }
    </div>
  )
}

export default App
