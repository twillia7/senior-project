import React from 'react';
import '../styles/ToDoItem.css'
import '../styles/ToDoCheckbox.css'

const ToDoItem = (props) => {
  
  return (
    <div className="toDoItem displayFlex">
      <label className="container">
        <input
          className="toDoCheckbox"
          key={`${props.toDoItem.id}-TDL-check`}
          type="checkbox"
          defaultChecked={props.toDoItem.isComplete}
          onClick={() => props.handleCheckboxClick(props.toDoItem.id)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="toDoItemData">
        <p>{props.toDoItem.title}</p> 
        <p>{props.toDoItem.id}</p>
      </div>
    </div>
  )
}

export default ToDoItem;