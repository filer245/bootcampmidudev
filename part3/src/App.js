import React from 'react';
import {Note} from './Note';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        const {data} = res;
        setNotes(data);
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
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    }

    setNotes([...notes, noteToAddToState]);
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
    </div>
  )
}

