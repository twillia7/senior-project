import React, { useState, useEffect } from 'react';
import '../styles/ToDoEdit.css'

const ToDoEdit = (props) => {
  const { currentItem, setEditing, updateItem, deleteItem } = props;
  const [item, setItem] = useState(currentItem)

  useEffect(
    () => {
      setItem(currentItem)
    },
    [ currentItem ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  const handleDeleteItem = () => {
    deleteItem(item.id)
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (item?.title?.length === 0) return

        updateItem(item.id, item)
      }}
      autoComplete="off"
    >
      <input 
        className="toDoEditInput toDoEditTitle" 
        type="text" 
        name="title" 
        value={item.title} 
        onChange={handleInputChange} 
        placeholder="Title"
        autoComplete="off"/>
      <input 
        className="toDoEditInput toDoEditNotes" 
        type="text" 
        name="notes" 
        value={item.notes} 
        onChange={handleInputChange} 
        placeholder="Notes"
        autoComplete="off"/>
      <div className="toDoEditButtonContainer">
        <button 
          className="toDoEditSave" 
          type="submit"
          >
          Save
        </button>
        <button 
          className="toDoEditCancel" 
          onClick={() => setEditing(false)} 
          >
          Cancel
        </button>
        <button 
          className="toDoEditDelete"
          onClick={() => handleDeleteItem()}
          >
          Delete
        </button>
      </div>
    </form>
  )
}

export default ToDoEdit;