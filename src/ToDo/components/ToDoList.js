import React from 'react';
import ToDoItem from './ToDoItem'
import '../styles/ToDoList.css'

const ToDoList = (props) => {
  return (
    <div>
      {props.toDoItems.length === 0 
        ? <h2>You are all caught up!</h2>
        : <div>
            <h2>{props.toDoItems.length} {props.toDoItems.length === 1 ? 'Task' : 'Tasks'}</h2>
            {props.toDoItems.map(toDoItem => (
              <div className="displayFlex" key={`${toDoItem.id}-TDL-container`}>
                <div key={`${toDoItem.id}-TDL-button`}>Button</div>
                <ToDoItem 
                  key={`${toDoItem.id}-TDL-item`}
                  id={toDoItem.id} 
                  title={toDoItem.title} /> 
              </div>
            ))}
          </div>
      }
    </div>
  )
}

export default ToDoList;