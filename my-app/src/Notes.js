import Note from './Note';

function Notes({ notes, setNotes, filteredNotes, setEditId }) {

  const items = filteredNotes.map(note => {
    return <Note 
      key={note.id}
      id={note.id}
      title={note.title}
      setEditId={setEditId}
      remItem={remItem}
    />
  });

  function remItem(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return <div className='notebook'>
    <div className='item'>
      <ul className='list'>
        {items}
      </ul>
    </div>
  </div>
}

export default Notes;
