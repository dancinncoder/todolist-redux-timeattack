import uuid from "react-uuid";

//1. action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

//2. action creators
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

//3. initial state => reducer를 구성할 때
const initailState = [
  {
    id: uuid(),
    title: "제목1",
    content: "내용1",
    isDone: false,
  },
  {
    id: uuid(),
    title: "제목2",
    content: "내용2",
    isDone: false,
  },
  {
    id: uuid(),
    title: "제목3",
    content: "내용3",
    isDone: true,
  },
];

//4. reducer 만들기
const todos = (state = initailState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload); //payload 는 id 값
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          //payload 는 id 값
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
  }
};

//5. reducer export
export default todos;
