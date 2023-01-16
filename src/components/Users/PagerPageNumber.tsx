import React from 'react';
import classes from './User.module.css'
import {UserType} from '../../redux/usersPage-reducer';

type PagerPageNumberPropsType = {
    pageNumber: number
    currentPage: number
    pageSize: number
    setCurrentPage: (pageNumber: number) => void
    setUsers: (users: Array<UserType>) => void
    onChangeCurrentPage: (pageNumber: number) => void
}
const PagerPageNumber = (props: PagerPageNumberPropsType) => {
    const onChangeCurrentPageHandler = () => props.onChangeCurrentPage(props.pageNumber)
    return (<span
        className={`${classes.page} ${props.pageNumber === props.currentPage ? classes.selectedPage : ''}`}
        onClick={onChangeCurrentPageHandler}>
                {props.pageNumber}
            </span>);
}

export default PagerPageNumber;