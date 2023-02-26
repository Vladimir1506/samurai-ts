import {authAPI, usersAPI} from '../api/api';
import {setProfile} from './profilePage-reducer';
import {LoginDataType} from '../components/Login/LoginForm';
import {AppDispatch} from './redux-store';

const SET_USER_DATA = 'SET-USER-DATA'

export type AuthStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: AuthStateType = initialState, action: SetUserDataType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.payload.userId,
                email: action.payload.email,
                login: action.payload.login,
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state
    }
}
export type AuthActionsType = SetUserDataType
type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = ({userId, email, login, isAuth}: AuthStateType) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
}) as const

export const auth = () => (dispatch: AppDispatch) => {
    authAPI.me().then((data) => {
        if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setUserData({userId: id, email, login, isAuth: true}))
            usersAPI.getProfile(id).then(profile => dispatch(setProfile(profile)))
        } else (alert(data.messages[0]))
    })
}

export const login = (data: LoginDataType, setStatus: (status?: any) => void) => (dispatch: AppDispatch) => {
    authAPI.login(data).then(data => {
            if (data.resultCode === 0) {
                dispatch(auth())
                setStatus(null)
            } else {
                setStatus({error: data.messages[0]})
            }
        }
    )
}

export const logout = () => (dispatch: AppDispatch) => {
    authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData({userId: null, email: null, login: null, isAuth: false}))
                alert('logout success')
            } else (alert(data.messages[0]))
        }
    )
}