import {connect} from 'react-redux';
import React from 'react';
// import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import PagerPageNumber from './PagerPageNumber';
import Users from './Users';
import {
    followAC,
    setCurrentPageAC,
    setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/usersPage-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import Preloader from '../common/Preloader';

type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    setFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((data: any) => {
            this.props.setFetching(true)
            setTimeout(()=>{
                this.props.setUsers(data.data.items)
                this.props.setTotalUsersCount(data.data.totalCount)
                this.props.setFetching(false)
            },2000)

        })
    }

    render() {
        const currentPage = this.props.currentPage
        const totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            (i > 0) && (i <= totalPages) && pages.push(i)
        }
        const onChangeCurrentPage = (pageNumber: number) => {
            const pageSize = this.props.pageSize
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`).then((data: any) => {
                this.props.setFetching(true)
                setTimeout(()=>{
                    this.props.setCurrentPage(pageNumber)
                    this.props.setUsers(data.data.items)
                    this.props.setFetching(false)
                },2000)


            })
        }
        const firstPage = (<>
            <PagerPageNumber pageNumber={1}
                             currentPage={currentPage}
                             pageSize={this.props.pageSize}
                             setCurrentPage={this.props.setCurrentPage}
                             setUsers={this.props.setUsers}
                             onChangeCurrentPage={onChangeCurrentPage}
            />
            <span>...</span>
        </>)
        const lastPage = (<>
            <span>...</span>
            <PagerPageNumber pageNumber={totalPages} currentPage={currentPage}
                             pageSize={this.props.pageSize}
                             setCurrentPage={this.props.setCurrentPage}
                             setUsers={this.props.setUsers}
                             onChangeCurrentPage={onChangeCurrentPage}/>
        </>)
        const mappedPages = pages.map((page, index) => {
            return (<PagerPageNumber key={index}
                                     pageNumber={page}
                                     currentPage={this.props.currentPage}
                                     pageSize={this.props.pageSize}
                                     setCurrentPage={this.props.setCurrentPage}
                                     setUsers={this.props.setUsers}
                                     onChangeCurrentPage={onChangeCurrentPage}/>)

        })

        return <div>
            {(currentPage > 3) && firstPage}
            {mappedPages}
            {(currentPage < totalPages - 2) && lastPage}
            {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}/>}
        </div>

    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching

})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountAC(totalUsersCount)),
    setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
    setFetching: isFetching => dispatch(setFetchingAC(isFetching))
})
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)