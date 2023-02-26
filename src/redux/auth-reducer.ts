import {DispatchType} from './redux-store';
import {authAPI, usersAPI} from '../api/api';
import {setProfile} from './profilePage-reducer';
import {LoginDataType} from '../components/Login/Login';

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
                isAuth: true
            }
        }
        default:
            return state
    }
}

type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId: string | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login}
}) as const

export const auth = () => (dispatch: DispatchType) => {
    authAPI.me().then((data) => {
        if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setUserData(id, email, login))
            usersAPI.getProfile(id).then(profile => dispatch(setProfile(profile)))
        }
    })
}

export const login = (data: LoginDataType) => {
    authAPI.login(data).then(data => {
            if (data.resultCode === 0) {
                alert('success')
            } else (alert(data.messages[0]))
        }
    )
}