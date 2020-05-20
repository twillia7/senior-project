import React from 'react';
import '../styles/ToDoItem.css'
import '../styles/ToDoCheckbox.css'

const ToDoItem = (props) => {
  const {toDoItem, handleCheckboxClick, editItem } = props;
  
  return (
    <div className="toDoItem displayFlex">
      <label className="container">
        <input
          className="toDoCheckbox"
          key={`${toDoItem.id}-TDL-check`}
          type="checkbox"
          defaultChecked={toDoItem.isComplete}
          onClick={() => handleCheckboxClick(props.toDoItem.id)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="toDoItemData" onClick={() => editItem(toDoItem)}>
        <p className="toDoItemTitle">{toDoItem.title}</p> 
        <p className="toDoItemNotes">{toDoItem.notes}</p>
      </div>
    </div>
  )
}

export default ToDoItem;