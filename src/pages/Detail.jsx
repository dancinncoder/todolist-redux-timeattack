import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
  const paramId = useParams().id;
  const todos = useSelector((state)=> state.todos);
  const filteredTodo = todos.filter((item)=> {
    return item.id === paramId;
  })[0];
  console.log('filteredTodo',filteredTodo);
  const navigate = useNavigate();
  return (
    <div>
      <h2>제목: {filteredTodo.title}</h2>
      <p>내용: {filteredTodo.content}</p>
      <p>완료여부:{String(filteredTodo.isDone)}</p>
      <button onClick={()=> navigate("/")}>돌아가기</button>
    </div>
  )
}

export default Detail