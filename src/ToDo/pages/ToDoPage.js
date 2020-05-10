import React, { useState } from 'react';
import ToDoList from '../components/ToDoList'
import '../../shared/styles/sharedStyles.css'
import '../styles/ToDoPage.css'

const ToDoPage = () => {
  const [toDoItems, setToDoItems] = useState([
    { id: 'TEST_01', 
      title: 'Mail Letter', 
      notes: 'Make sure to take it to the post office before 2:00 P.M.', 
      hasDueDate: true, 
      dueDate: Date.now(),
      priority: 1,
      isComplete: true
    },
    { id: 'TEST_02', 
      title: 'Finish Essay', 
      notes: 'Topic: Biology', 
      hasDueDate: true, 
      dueDate: Date.now(),
      priority: 2,
      isComplete: false
    },
    { id: 'TEST_03', 
      title: 'Lunch With Jim', 
      notes: 'Meet at Cafeteria', 
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