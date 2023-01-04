import {connect} from 'react-redux';
import Users from './Users';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/usersPage-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    follow: (userId: string) => dispatch(followAC(userId)),
    unfollow: (userId: string) => dispatch(unfollowAC(userId)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
})
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)