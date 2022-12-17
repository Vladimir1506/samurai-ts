import React from 'react';
import './index.css';
import {store, StoreType} from './redux/store';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const renderEntireTree = function (store: StoreType) {
    ReactDOM.render(<BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root'))
}
renderEntireTree(store)
store.subscribe(renderEntireTree)
