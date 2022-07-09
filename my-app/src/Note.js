function Note({ id, title, setEditId, remItem }) {
  return <li className='list-item' key={id} onClick={() => setEditId(id)}>
    {title}
    <button className="button-delete" onClick={() => remItem(id)}>✕</button>
  </li>
}

export default Note;