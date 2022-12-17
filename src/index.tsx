import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';

export type StateType = ReturnType<typeof store.getState>

const renderEntireTree = function (state: StateType) {
    ReactDOM.render(<BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'))
}
renderEntireTree(store.getState())
store.subscribe(() => renderEntireTree(store.getState()))
