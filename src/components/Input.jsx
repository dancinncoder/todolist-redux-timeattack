import React from 'react'

function Input() {
  const [title, setTitle] = ('');
  const [content, setContent] = ('');

  const addHandler = (event) => {
    event.preventDefault();
    alert('1');
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
        내용:<input value={content} onChange={typeContentHandler}/>
        <button type='submit'>추가</button>
      </form>
    </div>
  )
}

export default Input