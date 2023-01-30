import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {messagePageReducer} from './messagePage-reducer';
import {usersPageReducer} from './usersPage-reducer';
import {authReducer} from './auth-reducer';
import ThunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagePage: messagePageReducer,
        usersPage: usersPageReducer,
        authData: authReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));
export type DispatchType = typeof store.dispatch
declare global {
    interface Window {
        store: Store;
    }
}
window.store = store;