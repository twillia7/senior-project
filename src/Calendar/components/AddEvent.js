import React, { useState, useEffect } from 'react';
import TimePicker from 'react-time-picker';

import '../../shared/styles/sharedStyles.css'
import '../styles/AddEvent.css'

const AddEvent = (props) => {

  const [eventFormState, setEventState] = 
    useState({
      id: '',
      title: '',
      description: '',
      date: null,
      startTime: '10:00',
      endTime: '11:00'
    })

  useEffect(() => {
    console.log("EFS: ", eventFormState)
  }, [eventFormState])

  const handleSubmit = (event) => {
    console.log('Title: ', eventFormState.title);
    console.log('Description: ', eventFormState.description);
    event.preventDefault();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEventState({ ...eventFormState, [name]: value })
  }

  const onStartTimeChange = (time) => {
    setEventState({ ...eventFormState, ['startTime']: time })
  }

  const onEndTimeChange = (time) => {
    setEventState({ ...eventFormState, ['endTime']: time })
  }

  const handleCancelClick = () => {
    console.log("Cancel")
  }
 
  return (
    <div className="addEventMainContainer">
     <form onSubmit={handleSubmit} autoComplete="off">
       <div className="displayFlex spaceAround">
          <TimePicker
            clearIcon={null}
            required
            disableClock
            onChange={onStartTimeChange}
            value={eventFormState.startTime}
          />
          <TimePicker
            clearIcon={null}
            required
            disableClock
            onChange={onEndTimeChange}
            value={eventFormState.endTime}
          />
       </div>
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

export default AddEvent;