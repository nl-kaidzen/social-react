import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './state/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, changeNewPostText, subscribe } from './state/state.js'

let renderApp = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost} 
        setNewPostText={changeNewPostText} />, document.getElementById('root'));
};

renderApp(state)
subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
