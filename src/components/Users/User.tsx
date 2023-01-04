import React from 'react';
import {UserType} from '../../redux/usersPage-reducer';
import classes from './User.module.css'

type UserPropsType = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}
const User = ({user, follow, unfollow}: UserPropsType) => {
    const followButtonHandler = () => follow(user.id)
    const unfollowButtonHandler = () => unfollow(user.id)
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <div><img className={classes.img} src={user.avatar} alt="Avatar"/></div>
                {user.followed ?
                    <button onClick={unfollowButtonHandler}>Unfollow</button> :
                    <button onClick={followButtonHandler}>Follow</button>
                }
            </div>
            <div><span>{user.name}</span></div>
            <div className={classes.address}>
                <div>{user.address.country}</div>
                <div>{user.address.city}</div>
            </div>
        </div>
    );
};

export default User;