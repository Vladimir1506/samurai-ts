import {combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {messagePageReducer} from './messagePage-reducer';

const reducers = combineReducers({
    profilePageReducer,
    messagePageReducer
})

export const store = createStore(reducers);