import React from 'react';
import {Note} from './Note';
import { useState } from 'react';

export default function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) =>{
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('crear nota');
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5 
    }
    console.log(noteToAddToState)

    setNotes([...notes, noteToAddToState]);
    setNewNote('');
    
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return(
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? 'Ver solo notas importantes' : 'Ver todas'}</button>
      <ol>
      {notes
      .filter(note => {
        if(showAll === true) return true;
        return note.important === true;
      })
      .map(note => (<Note key={note.id} {...note}/>))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button>Crear nota</button>
      </form>
    </div>
  )
}

