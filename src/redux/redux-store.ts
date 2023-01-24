import {combineReducers, createStore, Store} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {messagePageReducer} from './messagePage-reducer';
import {usersPageReducer} from './usersPage-reducer';
import {authReducer} from './auth-reducer';

const rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagePage: messagePageReducer,
        usersPage: usersPageReducer,
        authData: authReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

declare global {
    interface Window {
        store: Store;
    }
}
window.store = store;