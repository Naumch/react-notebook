import React, { useState } from 'react';
import Notes from './Notes';
import Filter from "./Filter";
import Inputs from './Inputs';

const initNotes = [];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [filter, setFilter] = useState('');
  const [editId, setEditId] = useState(null);

  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className='wrap'>
      <div className='notebook'>
        <div className='item'>
          <Filter filter={filter} setFilter={setFilter}/>
          <Notes notes={notes} setNotes={setNotes} filteredNotes={filteredNotes} setEditId={setEditId}/>
        </div>
        <div className='item'>
          <Inputs editId={editId} setEditId={setEditId} notes={notes} setNotes={setNotes}/>
        </div>
      </div>
    </div>
  )
}

export default App;