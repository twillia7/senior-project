import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

import AddEvent from '../components/AddEvent'
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css'

const CalendarPage = () => {
  const [calendarState, setCalendarState] = useState( { date: new Date() });
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  useEffect(() => {
    console.log("STATE: ", calendarState.date.getDate())
  }, [calendarState])
 
  const onDateChange = date => {
    setCalendarState({date: new Date(date)})
  }
 
  return (
    <div className="calendarPageMainContainer">
      <div className="leftSide">
        <div className="calendarPageHeader">
          <div className="calendarPageHeaderDate">{`${monthNames[calendarState.date.getMonth()]} ${calendarState.date.getDate()}, ${calendarState.date.getFullYear()}`}</div>
          <div className="calendarPageHeaderDay">{weekdayNames[calendarState.date.getDay()]}</div>
        </div>
      </div>
      <div className="rightSide">
        <Calendar
          onChange={onDateChange}
          value={calendarState.date}
        />
        <button className="addCalendarEventButton">+</button>
        <AddEvent />
      </div>
    </div>
  );
}

export default CalendarPage;