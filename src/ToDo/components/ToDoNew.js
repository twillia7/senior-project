import React, { useState } from 'react';
import '../styles/ToDoNew.css'

const ToDoNew = (props) => {
  const { addItem } = props
  const initialFormState = { id: null, title: '', notes: '', isComplete: false }
  const [ item, setItem ] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    
    setItem({ ...item, [name]: value })
  }

  return (
    <form
			onSubmit={event => {
        event.preventDefault()
        if (item?.title?.length === 0) return
        
        addItem(item)
				setItem(initialFormState)
			}}
		>
      <input type="text" name="title" value={item.title} onChange={handleInputChange} placeholder="Title" />
      <input type="text" name="notes" value={item.notes} onChange={handleInputChange} placeholder="Notes" />
			<button type="submit">Save</button>
		</form>
  )
}

export default ToDoNew;