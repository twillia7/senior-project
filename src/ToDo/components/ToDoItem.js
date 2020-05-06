import React from 'react';

const ToDoItem = (props) => {
  
  return (
    <div>
      <p>{props.title}</p> 
      <p>{props.id}</p>
    </div>
  )
}

export default ToDoItem;