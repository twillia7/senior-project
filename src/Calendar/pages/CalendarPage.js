import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [calendarState, setCalendarState] = useState( { date: new Date() })
 
  const onChangeFunction = date => {
    console.log("DATE: ", date)
    setCalendarState({date: date})
  }
 
  return (
    <div>
      <Calendar
        onChange={onChangeFunction}
        value={calendarState.date}
      />
    </div>
  );
}

export default CalendarPage;