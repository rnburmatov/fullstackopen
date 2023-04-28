import {useState, useEffect} from 'react';
import axios from 'axios';

import Note from './components/Note';

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('A new note');
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    axios.get('http://localhost:3001/notes').then(response => {
    setNotes(response.data)
    });
  }

  useEffect(hook, []);

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>{showAll ? 'Important' : 'Show All'}</button>
      </div>
      <ul>
        {notesToShow.map(note => <Note key={note.id} content={note.content}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App
