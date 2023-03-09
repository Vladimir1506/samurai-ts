import {AppDispatch} from './redux-store';
import {auth} from './auth-reducer';

export type AppInitStateType = typeof initAppState

const SET_INITIALIZED = 'SET-INITIALIZED'
const initAppState = {
    initialized: false
}
export const appReducer = (state: AppInitStateType = initAppState, action: AppActionType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}

export type AppActionType = SetInitializedACType
type SetInitializedACType = ReturnType<typeof setInitialized>
const setInitialized = () => ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch: AppDispatch) => {
    dispatch(auth()).then(() => {
        dispatch(setInitialized())
    })
}