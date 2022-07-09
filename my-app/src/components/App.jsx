import React, { useState } from 'react';
import Notes from './Notes';
import Filter from "./Filter";
import Inputs from './Inputs';
import uniqid from "uniqid";

const initNotes = [
  {id: uniqid(), title: "Каждый", text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами."},
  {id: uniqid(), title: "Охотник", text: "Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики."},
  {id: uniqid(), title: "Желает", text: "Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу."},
  {id: uniqid(), title: "Знать", text: "Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь."}
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [filter, setFilter] = useState('');
  const [editId, setEditId] = useState(null);

  return (
    <div className='wrap'>
      <div className='notebook'>
        <div className='item'>
          <Filter filter={filter} setFilter={setFilter}/>
          <Notes notes={notes} setNotes={setNotes} filter={filter} setEditId={setEditId}/>
        </div>
        <div className='item'>
          <Inputs editId={editId} setEditId={setEditId} notes={notes} setNotes={setNotes}/>
        </div>
      </div>
    </div>
  )
}

export default App;