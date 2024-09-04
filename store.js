import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer.js";
import userReducer from "./userReducer.js";

const rootReducer = combineReducers({
    todosState: todoReducer,
    usersState: userReducer
})

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("Store got updated :", store.getState());
    
})

export default store;