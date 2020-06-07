import React, { useState } from 'react';

import '../styles/CreateNote.css'

const CreateNote = (props) => {
  const { addNote } = props
  const initialFormState = { id: '', uid: '', title: '', notes: '' }
  const [ note, setNote ] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    
    setNote({ ...note, [name]: value })
  }

  const handleCancelClick = () => {
    setNote({...initialFormState})
  }

  return (
    <form
    className="noteForm"
    onSubmit={event => {
      event.preventDefault()
      if (note?.title?.length === 0) return
      
      addNote(note)
      setNote(initialFormState)
    }}
    autoComplete="off"
  >
    <div className="noteHeader">
      <input 
        className="createNoteTitle" 
        type="text" 
        name="title" 
        value={note.title} 
        onChange={handleInputChange} 
        placeholder="Title" 
        autoComplete="off"/>
        <div className="noteButtonContainer">
          <button className="noteButton" type="submit" >Save</button>
          <button className="noteButton" type="button" onClick={handleCancelClick}>Clear</button>
        </div>
    </div>
    <br />
    <textarea 
      className="createNoteBody" 
      type="text" 
      name="notes" 
      value={note.notes} 
      onChange={handleInputChange} 
      placeholder="Notes" 
      autoComplete="off"/>
  </form>
  )
}

export default CreateNote;