import React from 'react';
import ToDoItem from './ToDoItem'
import '../../shared/styles/sharedStyles.css'
import '../styles/ToDoCheckbox.css'
import '../styles/ToDoList.css'

const ToDoList = (props) => {
  console.log("PROPS: ", props)
  return (
    <div className="listContainer">
      {props.toDoItems.map(toDoItem => (
        <div className="displayFlex toDoItemContainer" key={`${toDoItem.id}-TDL-container`}>
          <label className="container">
            <input
              className="toDoCheckbox"
              key={`${toDoItem.id}-TDL-check`}
              type="checkbox"
              defaultChecked={toDoItem.isComplete}
              onClick={() => props.handleCheckboxClick(toDoItem.id)}
            />
            <span className="checkmark"></span>
          </label>
          <ToDoItem 
            key={`${toDoItem.id}-TDL-item`}
            id={toDoItem.id} 
            title={toDoItem.title} /> 
        </div>
      ))}
    </div>
  )
}

export default ToDoList;