import React from 'react';
import ToDoList from '../components/ToDoList'
import '../styles/ToDoPage.css'

const ToDoPage = () => {
  const TODOITEMS = [
    { id: 'TEST_01', 
      title: 'TEST_01 Title', 
      notes: 'Hello World, I am a note on a ToDo Item', 
      hasDueDate: true, 
      dueDate: Date.now()
    },
    { id: 'TEST_02', 
      title: 'TEST_02 Title', 
      notes: 'Hello World, I am a note on a ToDo Item', 
      hasDueDate: true, 
      dueDate: Date.now()
    },
    { id: 'TEST_03', 
    title: 'TEST_03 Title', 
    notes: 'Hello World, I am a note on a ToDo Item', 
    hasDueDate: true, 
    dueDate: Date.now()
  },
  ];

  return (
    <div>
      <h1 className="ToDoPageTitle">To Do Page</h1> 
      <ToDoList toDoItems={TODOITEMS}/>
    </div>
  )
}

export default ToDoPage;