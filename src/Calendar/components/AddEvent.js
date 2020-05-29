import React, { useState, useEffect } from 'react';
import TimePicker from 'react-time-picker';

import '../../shared/styles/sharedStyles.css'
import '../styles/AddEvent.css'

const AddEvent = (props) => {
  const { calendarDate, addEvent } = props;

  const initialFormState = { 
    id: '', 
    uid: '',
    title: '', 
    description: '', 
    startTime: new Date(Date.parse(`2020-01-01T12:00:00`)),
    endTime: new Date(Date.parse(`2020-01-01T13:00:00`)) 
  }

  const [eventFormState, setEventState] = useState(initialFormState)

  const handleSubmit = (event) => {
    event.preventDefault();
    addEvent(eventFormState, calendarDate);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEventState({ ...eventFormState, [name]: value })
  }

  const onStartTimeChange = (time) => {
    setEventState({ ...eventFormState, startTime: new Date(Date.parse(`2020-05-27T${time}:00`)) })
  }

  const onEndTimeChange = (time) => {
    setEventState({ ...eventFormState, endTime: new Date(Date.parse(`2020-05-27T${time}:00`)) })
  }

  const getTimeFromDate = (timeObject) => {
    if (timeObject.getMinutes() < 10) {
      return `${timeObject.getHours()}:0${timeObject.getMinutes()}`
    }
    return `${timeObject.getHours()}:${timeObject.getMinutes()}`
  }

  const handleCancelClick = () => {
    setEventState({...initialFormState})
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
            value={getTimeFromDate(eventFormState.startTime)}
          />
          <TimePicker
            clearIcon={null}
            required
            disableClock
            onChange={onEndTimeChange}
            value={getTimeFromDate(eventFormState.endTime)}
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