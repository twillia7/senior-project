import React, { useState } from 'react';

import '../styles/AddEvent.css'

const EditEvent = (props) => {

  const [eventFormState, setEventState] = 
    useState({
      id: '',
      title: '',
      description: '',
      date: null,
      startTime: '10_00_AM',
      endTime: '11_00_AM'
    })

  const handleSubmit = (event) => {
    console.log('Title: ', eventFormState.title);
    console.log('Description: ', eventFormState.description);
    event.preventDefault();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEventState({ ...eventFormState, [name]: value })
  }

  const handleCancelClick = () => {
    console.log("Cancel")
  }
 
  return (
    <div className="addEventMainContainer">
     <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            className="addEventInput eventTitle"
            placeholder="New Event"
            name="title"
            type="text"
            value={eventFormState.title}
            onChange={handleInputChange}
            autoComplete="off" />
        </label>
        <br />
        <label>
          <input
            className="addEventInput eventDescription"
            placeholder="Description"
            name="description"
            type="text"
            value={eventFormState.description}
            onChange={handleInputChange}
            autoComplete="off" />
        </label>
        <br />
        <div className="buttonContainer">
          <button type="submit" className="addEventButton">Save</button>
          <button type="button" className="addEventButton" onClick={handleCancelClick}>Cancel</button>
        </div> 
      </form>
    </div>
  )
}

export default EditEvent;