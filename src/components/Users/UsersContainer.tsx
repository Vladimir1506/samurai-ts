import {connect} from 'react-redux';
import React, {ComponentType} from 'react';
import PagerPageNumber from './PagerPageNumber';
import Users from './Users';
import {
    follow,
    unfollow,
    getUsers,
    setFetching,
    UserType
} from '../../redux/usersPage-reducer';
import {AppStateType} from '../../redux/redux-store';
import Preloader from '../common/Preloader';
import {compose} from 'redux';

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
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        const currentPage = this.props.currentPage
        const totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            (i > 0) && (i <= totalPages) && pages.push(i)
        }
        const onChangeCurrentPage = (pageNumber: number) => this.props.getUsers(pageNumber, this.props.pageSize)

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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingUsersIds: state.usersPage.followingUsersIds
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
            follow,
            unfollow,
            setFetching,
            getUsers
        }
    ))(UsersAPIComponent)