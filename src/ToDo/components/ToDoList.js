import React from 'react';
import ToDoItem from './ToDoItem'
import '../../shared/styles/sharedStyles.css'
import '../styles/ToDoList.css'

const ToDoList = (props) => {
  const { toDoItems, handleCheckboxClick, editItem } = props

  return (
    <div className="listContainer">
      {toDoItems.map(toDoItem => (
        <div key={`${toDoItem.id}-TDL-container`}>
          <ToDoItem 
            key={`${toDoItem.id}-TDL-item`}
            toDoItem={toDoItem}
            handleCheckboxClick={handleCheckboxClick}
            editItem={editItem}/> 
        </div>
      ))}
    </div>
  )
}

export default ToDoList;