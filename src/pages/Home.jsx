import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {styled} from 'styled-components';
import uuid from "react-uuid";
import { addTodo, turnDoneTodo } from '../redux/modules/todos';

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state)=>{
    return state.todos;
  })

  const typeTitleHandler = (event) => {
    setTitle(event.target.value);
  }

  const typeContentHandler = (event) => {
    setContent(event.target.value);
  }

  const addToDoHandler = (event) => {
    event.preventDefault();
    const newTodo = {id:uuid(), title, content, isDone: false};
    dispatch(addTodo(newTodo));
  }

  const turnToDone = () => {
    dispatch(turnDoneTodo());
  }
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addToDoHandler}>
        title : <input value={title} type="text" onChange={typeTitleHandler}/>
        content : <input value={content} type="text" onChange={typeContentHandler}/>
        <button>Submit</button>
      </form>
      <div>
        <div>
          <h3>진행중 할일</h3>
          <ul>
            {todos.filter((todo)=>{
              return todo.isDone === false;
            })
            .map((todo)=>{
                return(
                  <li key={uuid()}>
                    <h4>{todo.title}</h4>
                    <p>{todo.content}</p>
                    <p>{todo.id}</p>
                    <button onClick={turnToDone}>완료로 이동</button>
                    <button>할일 삭제</button>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div>
          <h3>완료된 할일</h3>
          <ul>
            {todos.filter((todo)=>{
              return todo.isDone === true;
            })
            .map((todo)=>{
              return(
                <li key={uuid()}>
                  <h4>{todo.title}</h4>
                  <p>{todo.content}</p>
                  <p>{todo.id}</p>
                  <button>진행중으로 이동</button>
                  <button>영구 삭제</button>
               </li>

              );
            })
            }
          </ul>
        </div>
      </div>
    
    
    
    </>
  )
}

export default Home