import React from 'react';
import {Note} from './Note';
import { useState, useEffect } from 'react';
import {create as createNote, getAll as getAllNotes} from './services/notes'

export default function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getAllNotes()
      .then(notes => {
        setNotes(notes);
        setLoading(false);
      })
  }, [])

  const handleChange = (event) =>{
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('crear nota');
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1,
    }

    setError('');
    createNote(noteToAddToState).then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote));
    }).catch(error =>{
      console.log(error);
      setError('Se ha petao');
    })

    //setNotes([...notes, noteToAddToState]);
    setNewNote('');
    
  }

  return(
    <div>
      <h1>Notes</h1>
      {loading ? 'Cargando...' : ''}
      <ol>
      {notes.map(note => (<Note key={note.id} {...note}/>))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button>Crear nota</button>
      </form>

      {error ? <span style={{color: 'red'}}>{error}</span> : ''}
    </div>
  )
}

