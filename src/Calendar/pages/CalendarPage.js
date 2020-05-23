import React, { useState } from 'react';
import Calendar from 'react-calendar';

import AddEvent from '../components/AddEvent'
import EditEvent from '../components/EditEvent'
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css'

const CalendarPage = () => {
  const calendarItemsData = [
    {
      id: 'calendar_1',
      title: 'Test',
      description: 'Prepare for tomorrow',
      year: 2020,
      month: 5,
      day: 20,
      startTime: '10:00',
      endTime: '11:00'
    },
    {
      id: 'calendar_2',
      title: 'Lunch',
      description: 'Prepare meal',
      year: 2020,
      month: 5,
      day: 20,
      startTime: '11:00',
      endTime: '12:00'
    },
    {
      id: 'calendar_3',
      title: 'Study',
      description: 'Prepare for quiz',
      year: 2020,
      month: 5,
      day: 20,
      startTime: '12:00',
      endTime: '1:00'
    }
  ]
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [ calendarState, setCalendarState ] = useState( { date: new Date() });
  const [ editing, setEditing ] = useState(false)

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
        <div>

        </div>
      </div>
      <div className="rightSide">
        <Calendar
          onChange={onDateChange}
          value={calendarState.date}
        />
        {!editing ? (
          <>
            <AddEvent 
              calendarState={calendarState}
            />
          </>
        ) : (
          <>
            <EditEvent />
          </>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;