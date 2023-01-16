import React from 'react';
import classes from './User.module.css'
import {UserType} from '../../redux/usersPage-reducer';
import axios from 'axios';

type PagerPageNumberPropsType = {
    pageNumber: number
    currentPage: number
    pageSize: number
    setCurrentPage: (pageNumber: number) => void
    setUsers: (users: Array<UserType>) => void
}

class PagerPageNumber extends React.Component<PagerPageNumberPropsType> {
    render() {
        const onChangeCurrentPage = () => {
            const pageSize = this.props.pageSize
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${pageSize}`).then((data: any) => {
                this.props.setCurrentPage(this.props.pageNumber)
                this.props.setUsers(data.data.items)
            })
        }
        return (
            <span
                className={`${classes.page} ${this.props.pageNumber === this.props.currentPage ? classes.selectedPage : ''}`}
                onClick={onChangeCurrentPage}>
                {this.props.pageNumber}
            </span>
        );
    }
}

export default PagerPageNumber;