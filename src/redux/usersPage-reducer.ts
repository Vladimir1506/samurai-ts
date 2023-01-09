const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
export type UserType = {
    id: string,
    name: string,
    avatar: string,
    photos: { small: string },
    followed: boolean,
    address: {
        country: string,
        city: string
    }
}
type StateType = {
    users: Array<UserType>
}
const initialState = {
    users: []
}
export const usersPageReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user: UserType) => user.id === action.payload.userId ? {
                    ...user,
                    followed: true
                } : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: UserType) => user.id === action.payload.userId ? {
                    ...user,
                    followed: false
                } : user)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
        default:
            return state
    }
}
type ActionType = followACType | unfollowACType | setUsersACType
type followACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => ({
    type: FOLLOW,
    payload: {userId}
}) as const
type unfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userId: string) => ({
    type: UNFOLLOW,
    payload: {userId}
}) as const
type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    payload: {users}
}) as const