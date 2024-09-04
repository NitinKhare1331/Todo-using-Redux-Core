//{type: "", payload: ""}
//dispatch({type: "ADD", payload: 1})

import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator, toggleTodoActionCreator } from "./actionCreator.js";
import store from "./store.js";


store.dispatch(addTodoActionCreator("task 1"))
console.log(store.getState().todosState);
store.dispatch(addTodoActionCreator("task 2"))
console.log(store.getState().todosState);

store.dispatch(addUserActionCreator("John Doe"))





