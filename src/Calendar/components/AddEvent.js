import React, { useState } from 'react';

import '../styles/AddEvent.css'

const AddEvent = (props) => {

  const [eventState, setEventState] = useState({ eventTitle: '', eventDescription: ''})

  const handleSubmit = (event) => {
    console.log('Title: ', eventState.eventTitle);
    console.log('Description: ', eventState.eventDescription);
    event.preventDefault();
  }

  const handleEventChange = (event) => {
    const target = event.target;
    const targetName = target.name;
    let value = target.value;

    if (targetName === 'eventTitle') {
      let editedEvent = {...eventState}
      delete editedEvent.eventTitle;
      setEventState({...editedEvent, eventTitle: value})
    }
    if (targetName === 'eventDescription') {
      let editedEvent = {...eventState}
      delete editedEvent.eventDescription;
      setEventState({...editedEvent, eventDescription: value})
    }
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
            name="eventTitle"
            type="text"
            value={eventState.eventTitle}
            onChange={handleEventChange}
            autoComplete="off" />
        </label>
        <br />
        <label>
          <input
            className="addEventInput eventDescription"
            placeholder="Description"
            name="eventDescription"
            type="text"
            value={eventState.eventDescription}
            onChange={handleEventChange}
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

export default AddEvent;