import React from 'react';

import '../styles/CalendarItem.css';

const CalendarItem = props => {
  const { event, editEvent } = props
  return (
    <div className="calendarItemBody" onClick={() => editEvent(event)}>
      <p className="calendarItemTitle">{event.title}</p>
      <p className="calendarItemDescription">{event.description}</p>
      <p className="calendarItemTimes">{`${event.startTime.toLocaleTimeString('en-US')} - ${event.endTime.toLocaleTimeString('en-US')}`}</p>
    </div>
  )
};

export default CalendarItem