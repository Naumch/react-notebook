import { useState } from 'react';
import uniqid from 'uniqid';
import Note from './Note';

function getInitObj() {
  return {
    id: uniqid(),
    title: '',
    text: ''
  }
}

function Notes({ notes, setNotes, filteredNotes }) {
  const [obj, setObj] = useState(getInitObj());
  const [editId, setEditId] = useState(null);

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

  function getValue(prop) {
		if (editId) {
			return notes.reduce((res, note) => 
        note.id === editId ? note[prop] : res, ''); 
		} else {
			return obj[prop];
		}
	}
	
	function changeItem(prop, event) {
		if (editId) {
			setNotes(notes.map(note =>
				note.id === editId ? {...note, [prop]: event.target.value} : note));
		} else {
			setObj({...obj, [prop]: event.target.value});
		}
	}
	
	function saveItem() {
		if (editId) {
			setEditId(null);
		} else {
			setNotes([...notes, obj]);
			setObj(getInitObj());
		}
	}

  return <div className='notebook'>
    <div className='item'>
      <ul className='list'>
        {items}
      </ul>
    </div>
    <div className='item'>
      <div className='field'>
        <label className='field__label' htmlFor='title'>Название:</label>
        <input className='field__input' name='title' value={getValue('title')} onChange={event => changeItem('title', event)} />
      </div>
      <div className='field'>
        <label className='field__label' htmlFor='text'>Текст:</label>
        <textarea className='field__textarea' name='text' value={getValue('text')} onChange={event => changeItem('text', event)} />
      </div>
      <button className='button-save' onClick={saveItem}>Сохранить</button>
    </div>
  </div>; 
}

export default Notes;
