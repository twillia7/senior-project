import React from 'react';
import '../styles/ToDoItem.css'

const ToDoItem = (props) => {
  
  return (
    <div className="toDoItem">
      <p>{props.title}</p> 
      <p>{props.id}</p>
    </div>
  )
}

export default ToDoItem;