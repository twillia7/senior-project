import React, { useState, useEffect } from 'react';
import '../styles/ToDoEdit.css'

const ToDoEdit = (props) => {
  const { currentItem, setEditing, updateItem, deleteItem } = props;
  const [item, setItem] = useState(currentItem)

  useEffect(
    () => {
      setItem(currentItem)
    },
    [ props ]
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
    >
      <input type="text" name="title" value={item.title} onChange={handleInputChange} placeholder="Title"/>
      <input type="text" name="notes" value={item.notes} onChange={handleInputChange} placeholder="Notes" />
      <button type="submit">Save</button>
      <button onClick={() => setEditing(false)} className="button muted-button">Cancel</button>
      <button onClick={() => handleDeleteItem()}>Delete</button>
    </form>
  )
}

export default ToDoEdit;