import React from "react";

function Filter({ filter, setFilter }) {

  return (
    <div className='field'>
      <label className='field__label' htmlFor='search'>Поиск по всем заметкам:</label>
      <input className='field__input' name='search' value={filter} onChange={event => setFilter(event.target.value)} />
    </div>
  )
}

export default Filter;