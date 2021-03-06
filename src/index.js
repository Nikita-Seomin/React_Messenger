import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import store from "./Data/Redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let renderDOM = () => {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>, document.getElementById('root')
    );
}

renderDOM();

store.subscribe(() => {
    renderDOM();
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
