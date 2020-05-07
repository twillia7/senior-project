import React, { useState, useCallback } from 'react';
import ToDoList from '../components/ToDoList'
import '../../shared/styles/sharedStyles.css'
import '../styles/ToDoPage.css'

const ToDoPage = () => {
  const [toDoItems, setToDoItems] = useState([
    { id: 'TEST_01', 
      title: 'TEST_01 Title', 
      notes: 'Hello World, I am a note on a ToDo Item', 
      hasDueDate: true, 
      dueDate: Date.now(),
      isComplete: true
    },
    { id: 'TEST_02', 
      title: 'TEST_02 Title', 
      notes: 'Hello World, I am a note on a ToDo Item', 
      hasDueDate: true, 
      dueDate: Date.now(),
      isComplete: false
    },
    { id: 'TEST_03', 
      title: 'TEST_03 Title', 
      notes: 'Hello World, I am a note on a ToDo Item', 
      hasDueDate: false, 
      dueDate: Date.now(),
      isComplete: false
    },
  ]);

  console.log("TODO: ", toDoItems)

  const handleCheckboxClick = (itemId) => {
    const itemIndex = toDoItems.findIndex(item => {
      if (item.id === itemId) return item
    })
    const newToDoItems = toDoItems.slice()
    newToDoItems[itemIndex].isComplete = !newToDoItems[itemIndex].isComplete;
    setToDoItems(newToDoItems)
  }

  return (
    <div>
      <div className="toDoHeaderContainer displayFlex spaceBetween directionRow">
        <h1>To Do</h1>
        <h1>{toDoItems.length}</h1>
      </div>
      <ToDoList toDoItems={toDoItems} handleCheckboxClick={handleCheckboxClick}/>
    </div>
  )
}

export default ToDoPage;