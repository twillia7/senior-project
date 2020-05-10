import React, { useState } from 'react';
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
      priority: 1,
      isComplete: true
    },
    { id: 'TEST_02', 
      title: 'TEST_02 Title', 
      notes: 'Hello World, I am a note on a ToDo Item', 
      hasDueDate: true, 
      dueDate: Date.now(),
      priority: 2,
      isComplete: false
    },
    { id: 'TEST_03', 
      title: 'TEST_03 Title', 
      notes: 'Hello World, I am a note on a ToDo Item', 
      hasDueDate: false, 
      dueDate: Date.now(),
      priority: 3,
      isComplete: false
    },
  ]);

  console.log("TODO: ", toDoItems)

  const handleCheckboxClick = (itemId) => {
    const itemIndex = toDoItems.findIndex(item => {
      return item.id === itemId
    })
    const newToDoItems = toDoItems.slice()
    newToDoItems[itemIndex].isComplete = !newToDoItems[itemIndex].isComplete;
    setToDoItems(newToDoItems)
  }

  return (
    <div>
      <div className="toDoHeaderContainer displayFlex spaceBetween">
        <h1 className="toDoHeaderItem">To Do</h1>
        <h1 className="toDoCount toDoHeaderItem">{toDoItems.length}</h1>
      </div>
      <div>
        {toDoItems.length > 0 &&
          <ToDoList toDoItems={toDoItems} handleCheckboxClick={handleCheckboxClick}/>
        }
        {toDoItems.length === 0 && 
          <div className="emptyMessage">All Items Completed</div>
        }
      </div>
      <div className="addToDoButtonContainer displayFlex justifyFlexEnd">
        <button className="addToDoButton">+</button>
      </div>
    </div>
  )
}

export default ToDoPage;