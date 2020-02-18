import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, changeNewPostText } from './state/state.js'

export let renderApp = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost} 
        setNewPostText={changeNewPostText} />, document.getElementById('root'));
}