import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './state/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let renderApp = (store) => {
    ReactDOM.render(<App 
        state={store.getState} 
        addPost={store.addPost} 
        setNewPostText={store.changeNewPostText} />, document.getElementById('root'));
};

renderApp(state);
store.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
