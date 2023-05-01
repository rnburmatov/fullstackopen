const express = require('express');
const app = express();

app.use(express.json());

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];

app.get('/api/persons', ((request, response) => {
  response.json(persons);
}))

app.get('/api/info', (request, response) => {
  response.send(`<div><p>Phonebook has info for ${persons.length} people</p><p>${new Date().toISOString()}</p></div>`);
})

app.get('/api/persons/:id', (req, res) => {
  const id = +req.params.id;
  const person = persons.find(person => person.id === id);

  person ? res.json(person) : res.status(404).end();
})

app.delete('/api/persons/:id', (req, res) => {
  const id = +req.params.id;
  persons = persons.filter(person => person.id !== id);

  res.status(201).end();
})

app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'Name is missing'
    })
  }

  const doubleNames = persons.filter(person => person.name.includes(body.name));

  if (doubleNames.length > 0) {
    return res.status(400).json({
      error: 'Name is already in a list'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.random() * 1000
  }

  persons = persons.concat(person);
  res.json(person);
})

const PORT = 3001;
app.listen(PORT);