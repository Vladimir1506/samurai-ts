import {combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {messagePageReducer} from './messagePage-reducer';
import {usersPageReducer} from './usersPage-reducer';

const rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagePage: messagePageReducer,
        usersPage: usersPageReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);