import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components';
import { deleteTodo, switchTodo } from '../redux/modules/todos';
import { useNavigate } from 'react-router-dom';

function TodoDisplay({isActive}) {
  const todos = useSelector((state)=> state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  }

  const switchHandler = (id) => {
    dispatch(switchTodo(id));
  }

  return (
    <div>
      <h3>{isActive ? '진행중' : '완료'}</h3>
      {todos.filter((item)=> item.isDone === !isActive)
      .map((item)=>{
        return(
          <StTodo key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>완료여부: {String(item.isDone)}</p>
            <button onClick={()=> switchHandler(item.id)}>{isActive? '완료': '진행중으로이동'}</button>
            <button onClick={()=> deleteHandler(item.id)}>삭제</button>
            <button onClick={()=> navigate(`/${item.id}`)}>상세보기</button>
          </StTodo>
        );
      })}
    </div>
  )
}

export default TodoDisplay

const StTodo = styled.div`
  background-color: #e7c2c2;
`;