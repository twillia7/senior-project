import React from 'react';

import HomePageExample from '../components/HomePageExample'
import '../styles/HomePage.css'

const HomePage = () => {
  const exampleData = {
    todo: {
      text: 'With the To Do app, you will be able to make customized lists of tasks that you need to complete.',
      src: 'Images/ToDo.png'
    },
    notes: {
      text: 'Use the Notes app to take notes for all of your classes.',
      src: 'Images/ToDo.png'
    },
    calendar: {
      text: 'The Calendar app allows you to look at your daily events and plan your schedule with ease.',
      src: 'Images/ToDo.png'
    }
  }


  return (
    <div className="homePageContainer">
      <h2 className="homePageHeader">Welcome to UniNote</h2> 
      <div className="homePageBody">
        <div className="homePageDescription">
          <p>Here at UniNote, you can keep track of all of your important events and information all in one place. UniNote offers a wide array of tools that will help you to succeed in school.</p>
        </div>
        <div className="homePageExamples">
          <HomePageExample 
            exampleText={exampleData.todo.text} 
            src={exampleData.todo.src}
            imageSide="right"
          ></HomePageExample>
          <HomePageExample 
            exampleText={exampleData.notes.text} 
            src={exampleData.notes.src}
            imageSide="left"
          ></HomePageExample>
          <HomePageExample 
            exampleText={exampleData.calendar.text} 
            src={exampleData.calendar.src}
            imageSide="right"
          ></HomePageExample>
        </div>
      </div>
    </div>
  )
}

export default HomePage;