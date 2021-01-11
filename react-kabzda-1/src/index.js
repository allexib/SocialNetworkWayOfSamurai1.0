import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let h1 = document.createElement("h1");
h1.innerHTML = "Hello";
document.querySelector("body")
    .appendChild(h1);

React.createElement("h1", [React.createElement("span")])

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));


