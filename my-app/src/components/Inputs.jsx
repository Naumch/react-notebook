import React, {useState} from "react";
import uniqid from "uniqid";

function Inputs({ editId, setEditId, notes, setNotes }) {
  const [obj, setObj] = useState(getInitObj());

  function getInitObj() {
    return {
      id: uniqid(),
      title: '',
      text: ''
    }
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

  return (
    <>
      <div className='field'>
        <label 
          className='field__label' 
          htmlFor='title'
        >
          Название заметки:
        </label>
        <input 
          className='field__input' 
          name='title' 
          value={getValue('title')} 
          onChange={event => changeItem('title', event)} 
        />
      </div>
      <div className='field'>
        <label 
          className='field__label' 
          htmlFor='text'
        >
          Текст:
        </label>
        <textarea 
          className='field__textarea' 
          name='text' 
          value={getValue('text')} 
          onChange={event => changeItem('text', event)} 
        />
      </div>
      <button 
        className='button-save' 
        onClick={saveItem}
      >
        Добавить
      </button>
    </>
  )
}

export default Inputs;