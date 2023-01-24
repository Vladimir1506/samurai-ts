const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_FETCHING = 'SET-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS_USERS_ID = 'TOGGLE-FOLLOWING-IN-PROGRESS-USERS-ID'

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
    isFetching: boolean
    followingUsersIds: string[]
}
const initialState = {
    users: [],
    totalUsersCount: 77,
    pageSize: 15,
    currentPage: 1,
    isFetching: false,
    followingUsersIds: []
}
export const usersPageReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((user: UserType) => user.id === action.payload.userId ? {
                    ...user, followed: true
                } : user)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((user: UserType) => user.id === action.payload.userId ? {
                    ...user, followed: false
                } : user)
            }
        case SET_USERS:
            return {...state, users: action.payload.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.pageNumber}
        case SET_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS_USERS_ID:
            return {

                ...state,
                followingUsersIds: state.followingUsersIds.find(userId => userId === action.payload.userId) ? state.followingUsersIds.filter(userId => userId !== action.payload.userId) : [...state.followingUsersIds, action.payload.userId]
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
    | setFetchingACType
    | toggleFollowedUserIdACType
type followACType = ReturnType<typeof follow>
export const follow = (userId: string) => ({
    type: FOLLOW,
    payload: {userId}
}) as const
type unfollowACType = ReturnType<typeof unfollow>

export const unfollow = (userId: string) => ({
    type: UNFOLLOW,
    payload: {userId}
}) as const
type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    payload: {users}
}) as const
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (pageNumber: number) => ({
    type: SET_CURRENT_PAGE,
    payload: {pageNumber}
}) as const
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalUsersCount}
}) as const
type setFetchingACType = ReturnType<typeof setFetching>
export const setFetching = (isFetching: boolean) => ({
    type: SET_FETCHING,
    payload: {isFetching}
}) as const
type toggleFollowedUserIdACType = ReturnType<typeof toggleFollowedUserId>
export const toggleFollowedUserId = (userId: string) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS_USERS_ID,
    payload: {userId}
}) as const