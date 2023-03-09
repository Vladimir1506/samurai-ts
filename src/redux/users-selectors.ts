import {AppStateType} from './redux-store';

export const getUsers = (state: AppStateType) => state.usersPage.users
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getPageSize = (state: AppStateType) =>  state.usersPage.pageSize
export const getCurrentPage = (state: AppStateType) =>  state.usersPage.currentPage
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingUsersIds = (state: AppStateType) => state.usersPage.followingUsersIds