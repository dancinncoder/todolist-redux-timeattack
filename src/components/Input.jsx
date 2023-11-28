import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import uuid from 'react-uuid';

function Input() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const addHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      title: title,
      content: content,
      isDone: false,
    }
    dispatch(addTodo(newTodo));
  }

  const typeTitleHandler = (event) => {
    setTitle(event.target.value);
  }

  const typeContentHandler = (event) => {
    setContent(event.target.value);
  }
  return (
    <div>
      <form onSubmit={addHandler}>
        제목: <input value={title} onChange={typeTitleHandler}/>
        내용 :<input value={content} onChange={typeContentHandler}/>
        <button type='submit'>추가</button>
      </form>
    </div>
  )
}

export default Input;