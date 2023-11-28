import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "./modules/todos";
//1. rootReducer 만들기
//2. store 만들기
//3. export해서 다른 파일에서 사용할수있도록 한다.

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
