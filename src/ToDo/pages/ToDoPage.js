import React, { useState, useReducer } from 'react';
import ToDoList from '../components/ToDoList'
import ToDoNew from '../components/ToDoNew'
import ToDoEdit from '../components/ToDoEdit'
import '../../shared/styles/sharedStyles.css'
import '../styles/ToDoPage.css'

const ToDoPage = () => {
  const toDoItemsData = [
    { id: 'todo_1', 
      title: 'Mail Letter', 
      notes: 'Make sure to take it to the post office before 2:00 P.M.', 
      isComplete: true
    },
    { id: 'todo_2', 
      title: 'Finish Essay', 
      notes: 'Topic: Biology', 
      isComplete: false
    },
    { id: 'todo_67', 
      title: 'Lunch With Jim', 
      notes: 'Meet at Cafeteria', 
      isComplete: false
    },
  ];
  const initialFormState = { id: '', title: '', notes: '', isComplete: false }

  const [ toDoItems, setToDoItems ] = useState(toDoItemsData);
  const [ currentItem, setCurrentItem ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)

  const addItem = item => {
    item.id = `todo_${(parseInt((toDoItems[toDoItems.length - 1].id).replace('todo_', '')) + 1)}`;
    setToDoItems([...toDoItems, item])
  }

  const deleteItem = id => {
    setEditing(false)

    setToDoItems(toDoItems.filter(item => item.id !== id))
  }

  const updateItem = (id, updatedItem) => {
    setEditing(false)

    setToDoItems(toDoItems.map(item => (item.id === id ? updatedItem : item)))
  }

  const editItem = (item) => {
    setEditing(true)
    setCurrentItem({id: item.id, title: item.title, notes: item.notes, isComplete: item.isComplete})
  }

  const handleCheckboxClick = (itemId) => {
    const itemIndex = toDoItems.findIndex(item => {
      return item.id === itemId
    })
    const newToDoItems = toDoItems.slice()
    newToDoItems[itemIndex].isComplete = !newToDoItems[itemIndex].isComplete;
    setToDoItems(newToDoItems)
  }

  return (
    <div className="toDoMainContainer">
      <div className="toDoLeft">
        <div className="toDoHeaderContainer displayFlex spaceBetween">
          <h1 className="toDoHeaderItem">To Do</h1>
          <h1 className="toDoCount toDoHeaderItem">{toDoItems.length}</h1>
        </div>
        <div>
          {toDoItems.length > 0 &&
            <div>
              <ToDoList 
                toDoItems={toDoItems} 
                handleCheckboxClick={handleCheckboxClick}
                editItem={editItem}/>
            </div>
          }
          {toDoItems.length === 0 && 
            <div className="emptyMessage">All Items Completed</div>
          }
        </div>
      </div>
      <div className="toDoRight">
        {editing ? (
          <>
            <h2>Edit Item</h2>
            <ToDoEdit 
              editing={editing}
              setEditing={setEditing}
              currentItem={currentItem}
              updateItem={updateItem}
              deleteItem={deleteItem}/>
          </>
        ) : (
          <>
            <h2>Add Item</h2>
            <ToDoNew 
              addItem={addItem} />
          </>
        )}
      </div>
    </div>
  )
}

export default ToDoPage;