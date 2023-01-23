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