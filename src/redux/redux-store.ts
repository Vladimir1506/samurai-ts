import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfilePageActionsType, profilePageReducer} from './profilePage-reducer';
import {messagePageReducer} from './messagePage-reducer';
import {UserPageActionsType, usersPageReducer} from './usersPage-reducer';
import {AuthActionsType, authReducer} from './auth-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagePage: messagePageReducer,
        usersPage: usersPageReducer,
        authData: authReducer
    }
)
export type AppActionsType = AuthActionsType | ProfilePageActionsType | UserPageActionsType
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>

declare global {
    interface Window {
        store: typeof store;
    }
}
window.store = store;