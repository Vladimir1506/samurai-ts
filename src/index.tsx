import React from 'react';
import './index.css';
import {store, StoreType} from './state';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(<BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root'))
}
rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)
