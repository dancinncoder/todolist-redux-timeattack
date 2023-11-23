import uuid from "react-uuid";
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const EDIT_TODO = "todos/EDIT_TODO";
const TURNDONE_TODO = "todos.TURNDONE_TODO";

const initialState = [
  { id: uuid(), title: "title1", content: "content1", isDone: false },
  { id: uuid(), title: "title2", content: "content2", isDone: false },
  { id: uuid(), title: "title3", content: "content3", isDone: true },
];

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

export const turnDoneTodo = (payload) => {
  return {
    type: TURNDONE_TODO,
    payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      console.log("action.payload", action.payload); // 추가한 todo 객체
      console.log("state", state); // todos의 initial 배열 값
      console.log("추가값", [...state, newTodo]); // state에 추가한 todo를 합친 배열
      return [...state, newTodo];
    case DELETE_TODO:
      return alert("delete");
    case EDIT_TODO:
      return alert("edit");
    case TURNDONE_TODO:
      console.log("action.payload", action.payload); // 추가한 todo 객체
      console.log("state", state); // todos의 initial 배열 값
      console.log("추가값", [...state, newTodo]);
    // return {...todo, isDone: true};
    default:
      return state;
  }
};

export default todos;
