import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from "./App";

let h1 = document.createElement("h1");
h1.innerHTML = "Hello";
document.querySelector("body")
    .appendChild(h1);

React.createElement("h1", [React.createElement("span")])

    ReactDOM.render( <SamuraiJSApp />, document.getElementById('root'));


