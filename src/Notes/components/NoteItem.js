import React from 'react';

import '../styles/NoteItem.css'

const NoteItem = (props) => {
  const { note, editNote } = props;
  return (
    <div className="noteItem" onClick={() => editNote(note)}>
      <p className="noteItemTitle">{note.title}</p>
    </div>
  )
};

export default NoteItem;