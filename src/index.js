import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './state/state.js';
import { renderApp } from './render.js'

renderApp(state)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
