import React, { useState, useEffect } from 'react';
import TimePicker from 'react-time-picker';

import '../../shared/styles/sharedStyles.css'
import '../styles/AddEvent.css'

const EditEvent = (props) => {
  const { setEditing, calendarDate, currentEvent, updateEvent, deleteEvent } = props;
  const [eventState, setEventState] = useState(currentEvent);

  useEffect(
    () => {
      setEventState(currentEvent)
    },
    [ currentEvent ]
  )


  const handleSubmit = (event) => {
    console.log("Calendar Date: ", calendarDate)
    console.log("Event Form State: ", eventState)
    event.preventDefault();
    if (eventState?.title?.length === 0) return

    updateEvent(eventState?.id, eventState);
  }

  const onStartTimeChange = (time) => {
    setEventState({ ...eventState, startTime: new Date(Date.parse(`2020-05-27T${time}:00`)) })
  }

  const onEndTimeChange = (time) => {
    setEventState({ ...eventState, endTime: new Date(Date.parse(`2020-05-27T${time}:00`)) })
  }

  const getTimeFromDate = (timeObject) => {
    if (timeObject.getMinutes() < 10) {
      return `${timeObject.getHours()}:0${timeObject.getMinutes()}`
    }
    return `${timeObject.getHours()}:${timeObject.getMinutes()}`
  }


  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEventState({ ...eventState, [name]: value })
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
            value={getTimeFromDate(eventState.startTime)}
          />
          <TimePicker
            clearIcon={null}
            required
            disableClock
            onChange={onEndTimeChange}
            value={getTimeFromDate(eventState.endTime)}
          />
       </div>
        <label>
          <input
            className="addEventInput eventTitle"
            placeholder="New Event"
            name="title"
            type="text"
            value={eventState.title}
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
            value={eventState.description}
            onChange={handleInputChange}
            autoComplete="off" />
        </label>
        <br />
        <div className="buttonContainer">
          <button type="submit" className="addEventButton">Save</button>
          <button type="button" className="addEventButton" onClick={() => setEditing(false)}>
            Cancel
          </button>
          <button 
          className="toDoEditDelete"
          onClick={() => deleteEvent(eventState.id)}
          >
            Delete
          </button>
        </div> 
      </form>
    </div>
  )
}

export default EditEvent;