import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";
import LoginReducer from "./LoginReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: LoginReducer
})

let store = createStore(reducers);

export default store;