import React from "react";

function Notes({ notes, setNotes, filter, setEditId }) {

  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filter.toLowerCase());
  });

  const items = filteredNotes.map(note => {
    return (
      <li className='list-item' key={note.id}>
        <div>
          <h3>{note.title}</h3>
          <p>{note.text}</p>
          <button onClick={() => setEditId(note.id)}>Редактировать запись</button>
        </div>
        <button className="button-delete" onClick={() => remItem(note.id)}>✕</button>
      </li>
    )
  });

  function remItem(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <ul className='list'>
      {items}
    </ul>
  )  
}

export default Notes;
