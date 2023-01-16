const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
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
type UsersStateType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
}
const initialState = {
    users: [],
    totalUsersCount: 77,
    pageSize: 15,
    currentPage: 1
}
export const usersPageReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
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
                ...state, users: action.payload.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.payload.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload.pageNumber
            }
        default:
            return state
    }
}
type ActionType = followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
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
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (pageNumber: number) => ({
    type: SET_CURRENT_PAGE,
    payload: {pageNumber}
}) as const
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalUsersCount}
}) as const