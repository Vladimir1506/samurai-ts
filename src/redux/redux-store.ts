import {applyMiddleware, combineReducers, createStore} from 'redux';
import {messagePageReducer} from './messagePage-reducer';
import {UserPageActionsType, usersPageReducer} from './usersPage-reducer';
import {AuthActionsType, authReducer} from './auth-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk'
import {AppActionType, appReducer} from './app-reducer';
import {ProfilePageActionsType, profilePageReducer} from 'redux/profilePageReducer/profilePage-reducer';

const rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagePage: messagePageReducer,
        usersPage: usersPageReducer,
        authData: authReducer,
        app: appReducer
    }
)
export type AppActionsType = AuthActionsType | ProfilePageActionsType | UserPageActionsType | AppActionType
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>

declare global {
    interface Window {
        store: typeof store;
    }
}

window.store = store;