import {combineReducers, createStore} from "redux";
import profileCreator from "./Profile-Creator";
import dialogsCreator from "./Dialogs-Creator";

let reducers = combineReducers({
    profilePage: profileCreator,
    dialogsPage: dialogsCreator
})

let store = createStore(reducers);

export default store;