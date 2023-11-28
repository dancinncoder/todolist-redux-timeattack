import uuid from "react-uuid";

//1. action items
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

//2. action creators
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload: payload,
  };
};

//3. initial state => reducer를 구성할 때
const initialState = [
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
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
//5. reducer export
export default todos;
