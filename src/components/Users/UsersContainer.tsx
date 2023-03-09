import {connect} from 'react-redux';
import React, {ComponentType} from 'react';
import PagerPageNumber from './PagerPageNumber';
import Users from './Users';
import {follow, fetchUsers, setFetching, unfollow, UserType} from '../../redux/usersPage-reducer';
import {AppStateType} from '../../redux/redux-store';
import Preloader from '../common/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingUsersIds,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from '../../redux/users-selectors';


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.fetchUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        console.log('Users render')
        const currentPage = this.props.currentPage
        const totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            (i > 0) && (i <= totalPages) && pages.push(i)
        }
        const onChangeCurrentPage = (pageNumber: number) => this.props.fetchUsers(pageNumber, this.props.pageSize)

        const firstPage = (<>
            <PagerPageNumber pageNumber={1}
                             currentPage={currentPage}
                             onChangeCurrentPage={onChangeCurrentPage}/>
            <span>...</span>
        </>)
        const lastPage = (<>
            <span>...</span>
            <PagerPageNumber pageNumber={totalPages} currentPage={currentPage}
                             onChangeCurrentPage={onChangeCurrentPage}/>
        </>)
        const mappedPages = pages.map((page, index) => {
            return (<PagerPageNumber key={index}
                                     pageNumber={page}
                                     currentPage={this.props.currentPage}
                                     onChangeCurrentPage={onChangeCurrentPage}/>)
        })
        return <div>
            {(currentPage > 3) && firstPage}
            {mappedPages}
            {(currentPage < totalPages - 2) && lastPage}
            {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           followingUsersIds={this.props.followingUsersIds}/>}
        </div>

    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingUsersIds: string[]
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setFetching: (isFetching: boolean) => void
    fetchUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log('Users mapStateToProps')
    return ({
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingUsersIds: getFollowingUsersIds(state)
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
            follow,
            unfollow,
            setFetching,
            fetchUsers
        }
    ))(UsersAPIComponent)