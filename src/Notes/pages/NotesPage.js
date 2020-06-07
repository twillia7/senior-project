import React, { useState, useEffect } from 'react';

import NoteItem from '../components/NoteItem'
import CreateNote from '../components/CreateNote'
import EditNote from '../components/EditNote'
import '../styles/NotesPage.css'

const NotesPage = () => {
  const notesData = [
    { id: 'note_1',
      uid: 'u1', 
      title: 'Science', 
      notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    },
    { id: 'note_2', 
      uid: 'u1', 
      title: 'Math Test Notes', 
      notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    },
    { id: 'note_67', 
      uid: 'u1', 
      title: 'English Essay', 
      notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    },
  ];
  const initialFormState = { id: '', uid: '', title: '', notes: '' }

  const [ notes, setNotes ] = useState(notesData); 
  const [ currentNote, setCurrentNote ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)

  useEffect(() => {
    console.log("NOTES: ", notes)
  }, [notes])

  /* CRUD Functions */
  const addNote = item => {
    if (notes.length === 0) item.id = 'todo_1';
    else item.id = `note_${(parseInt((notes[notes.length - 1].id).replace('note_', '')) + 1)}`;
    item.uid = 'u1';
    setNotes([...notes, item])
  }

  const deleteNote = id => {
    setEditing(false)

    setNotes(notes.filter(item => item.id !== id))
  }

  const updateNote = (id, updatedItem) => {
    setEditing(false)

    setNotes(notes.map(item => (item.id === id ? updatedItem : item)))
  }

  const editNote = (note) => {
    setEditing(true)
    setCurrentNote({id: note.id, title: note.title, notes: note.notes})
  }

  return (
    <div className="notesPage">
      <div className="notesList">
        {notes.map(note => <NoteItem note={note} editNote={editNote} /> )}
      </div>
      <div className="noteBody">
        {editing ? (
          <>
            <EditNote 
              setEditing={setEditing}
              currentNote={currentNote}
              updateNote={updateNote}
              deleteNote={deleteNote}
            />
          </>
        ) : (
          <>
            <CreateNote 
              setEditing={setEditing}
              addNote={addNote}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default NotesPage;