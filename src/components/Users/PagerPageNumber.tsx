import React from 'react';
import classes from './User.module.css'

type PagerPageNumberPropsType = {
    pageNumber: number
    currentPage: number
    onChangeCurrentPage: (pageNumber: number) => void
}
const PagerPageNumber = ({pageNumber, currentPage, onChangeCurrentPage}: PagerPageNumberPropsType) => {
    const onChangeCurrentPageHandler = () => onChangeCurrentPage(pageNumber)
    return (
        <span
            className={`${classes.page} ${pageNumber === currentPage ? classes.selectedPage : ''}`}
            onClick={onChangeCurrentPageHandler}>
                {pageNumber}
            </span>
    );
}

export default PagerPageNumber;