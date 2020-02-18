import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './state/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let renderApp = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={store.addPost.bind(store)} 
        setNewPostText={store.changeNewPostText.bind(store)} />, document.getElementById('root'));
};

renderApp(store.getState());
store.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
