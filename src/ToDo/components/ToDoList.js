import React from 'react';
import ToDoItem from './ToDoItem'
import '../../shared/styles/sharedStyles.css'
import '../styles/ToDoList.css'

const ToDoList = (props) => {
  console.log("PROPS: ", props)
  return (
    <div className="listContainer">
      {props.toDoItems.map(toDoItem => (
        <div key={`${toDoItem.id}-TDL-container`}>
          <ToDoItem 
            key={`${toDoItem.id}-TDL-item`}
            toDoItem={toDoItem}
            handleCheckboxClick={props.handleCheckboxClick} /> 
        </div>
      ))}
    </div>
  )
}

export default ToDoList;