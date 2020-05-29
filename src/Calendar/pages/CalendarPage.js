import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

import AddEvent from '../components/AddEvent'
import EditEvent from '../components/EditEvent'
import CalendarItem from '../components/CalendarItem'

import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css'

const CalendarPage = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const calendarItemsData = [
    {
      id: 'calendar_1',
      uid: 'u1',
      title: 'Test',
      description: 'Prepare for tomorrow',
      startTime: new Date(Date.parse('2020-05-27T12:00:00')),
      endTime: new Date(Date.parse('2020-05-27T13:00:00'))
    },
    {
      id: 'calendar_2',
      uid: 'u1',
      title: 'Lunch',
      description: 'Prepare meal',
      startTime: new Date(Date.parse('2020-05-27T13:00:00')),
      endTime: new Date(Date.parse('2020-05-27T14:00:00'))
    },
    {
      id: 'calendar_3',
      uid: 'u1',
      title: 'Study',
      description: 'Prepare for quiz',
      startTime: new Date(Date.parse('2020-05-27T14:00:00')),
      endTime: new Date(Date.parse('2020-05-27T15:00:00'))
    }
  ]
  const initialFormState = { 
    id: '', 
    uid: '',
    title: '', 
    description: '', 
    startTime: new Date(Date.parse(`2020-01-01T12:00:00`)),
    endTime: new Date(Date.parse(`2020-01-01T13:00:00`)) 
  }

  const [ calendarItems, setCalendarItems ] = useState(calendarItemsData);
  const [ editing, setEditing ] = useState(false);
  const [ currentEvent, setCurrentEvent ] = useState(initialFormState);

  /* Calender State */
  const [ calendarState, setCalendarState ] = useState( { date: new Date() });
  const [ calendarDate, setCalendarDate ] = useState( { year: 2020, month: 1, day: 1})

  useEffect(() => {
    setCalendarDate({ 
      year: calendarState.date.getFullYear(), 
      month: calendarState.date.getMonth() + 1, 
      day: calendarState.date.getDate()
    })
  }, [calendarState])

  const onDateChange = date => {
    setCalendarState({date: new Date(date)})
  }

  /* CRUD Functions */
  const addEvent = (event, calendarDate) => {
    if (calendarItems.length === 0) event.id = 'calendar_1';
    else event.id = `calendar_${(parseInt((calendarItems[calendarItems.length - 1].id).replace('calendar_', '')) + 1)}`
    event.uid = 'u1';
    event.startTime.setFullYear(calendarDate.year)
    event.endTime.setFullYear(calendarDate.year)
    event.startTime.setDate(calendarDate.day)
    event.endTime.setDate(calendarDate.day)
    event.startTime.setMonth(calendarDate.month - 1)
    event.endTime.setMonth(calendarDate.month - 1)
    /* TODO: Make ADD Request */
    console.log("HERE: ", event, calendarDate)
    setCalendarItems([...calendarItems, event])
  }

  const deleteEvent = id => {
    setEditing(false)
    /* TODO: Make DELETE Request */
    setCalendarItems(calendarItems.filter(event => event.id !== id))
  }

  const updateEvent = (id, updatedItem) => {
    setEditing(false)
    /* TODO: Make UPDATE Request */
    setCalendarItems(calendarItems.map(event => (event.id === id ? updatedItem : event)))
  }

  const editEvent = (event) => {
    console.log("EDIT: ", event)
    setEditing(true)
    /* TODO: Make EDIT Request */
    setCurrentEvent( 
      {
        id: event.id, 
        uid: event.uid,
        title: event.title, 
        description: event.description, 
        startTime: event.startTime,
        endTime: event.endTime
      }    
    )
  }
 
  return (
    <div className="calendarPageMainContainer">
      <div className="leftSide">
        <div className="calendarPageHeader">
          <div className="calendarPageHeaderDate">{`${monthNames[calendarState.date.getMonth()]} ${calendarState.date.getDate()}, ${calendarState.date.getFullYear()}`}</div>
          <div className="calendarPageHeaderDay">{weekdayNames[calendarState.date.getDay()]}</div>
        </div>
        <div>
          {calendarItems.map(event => <CalendarItem event={event} editEvent={editEvent} />)}
        </div>
      </div>
      <div className="rightSide">
        <Calendar
          onChange={onDateChange}
          value={calendarItems.date}
        />
        {editing ? (
          <>
            <EditEvent 
              setEditing={setEditing} 
              calendarDate={calendarDate}
              currentEvent={currentEvent}
              updateEvent={updateEvent}
              deleteEvent={deleteEvent}
            />
          </>
        ) : (
          <>
            <AddEvent
              calendarDate={calendarDate}
              addEvent={addEvent}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;