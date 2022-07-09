import React, { useState } from 'react';
import Notes from './Notes';
import Filter from "./Filter";

const initNotes = [];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [filter, setFilter] = useState('');

  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className='wrap'>
      <div className='item'>
        <Filter filter={filter} setFilter={setFilter}/>
        <Notes notes={notes} setNotes={setNotes} filteredNotes={filteredNotes}/>
      </div>
    </div>
  )
}

export default App;