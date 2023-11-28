import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

function TodoList() {
  const todos = useSelector((state)=> state.todos);

  return (
    <div>
      <h2>진행중</h2>
      {
        todos.map((item)=>{
          return(
            <>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>{String(item.isDone)}</p>
            </>
          );
        })
      }
      <h2>완료</h2>
    </div>
  )
}

export default TodoList