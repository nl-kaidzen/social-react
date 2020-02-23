import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './state/redux-store.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

let renderApp = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App 
                state={state} 
                dispatch={store.dispatch.bind(store)} 
                store={store} />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
};

renderApp(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderApp(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
