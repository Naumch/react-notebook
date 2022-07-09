
function Notes({ notes, setNotes, filteredNotes, setEditId }) {

  const items = filteredNotes.map(note => {
    return (
      <li 
        className='list-item' 
        key={note.id} 
        onClick={() => setEditId(note.id)}
      >
        {note.title}
        <button 
          className="button-delete" 
          onClick={() => remItem(note.id)}
        >
          ✕
        </button>
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
