import React, { useState, useEffect } from 'react';

const EditNote = (props) => {
  const { setEditing, currentNote, updateNote, deleteNote } = props;
  const [note, setNote] = useState(currentNote)

  useEffect(
    () => {
      setNote(currentNote)
    },
    [ currentNote ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    
    setNote({ ...note, [name]: value })
  }

  return (
    <form
      className="noteForm"
      onSubmit={event => {
        event.preventDefault()
        if (note?.title?.length === 0) return
        
        updateNote(note.id, note)
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
            <button className="noteButton" type="button" onClick={() => setEditing(false)}>Cancel</button>
            <button className="noteButton" type="button" onClick={() => deleteNote(note.id)}>Delete</button>
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

export default EditNote;