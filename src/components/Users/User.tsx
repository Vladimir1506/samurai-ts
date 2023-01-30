import React from 'react';
import {UserType} from '../../redux/usersPage-reducer';
import classes from './User.module.css'
import defaultUserImage from '../../assets/images/default-user.png'
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    isFollowingInProgress: boolean,
}
const User = ({user, follow, unfollow, isFollowingInProgress}: UserPropsType) => {
    const followButtonHandler = () => follow(user.id)
    const unfollowButtonHandler = () => unfollow(user.id)
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <div><img className={classes.img}
                          src={user.photos.small ?? defaultUserImage}
                          alt="Avatar"/></div>
                {user.followed ?
                    <button disabled={isFollowingInProgress} onClick={unfollowButtonHandler}>Unfollow</button> :
                    <button disabled={isFollowingInProgress} onClick={followButtonHandler}>Follow</button>
                }
            </div>
            <NavLink to={'profile/' + user.id}>
                <div><span>{user.name}</span></div>
            </NavLink>
            <div className={classes.address}>
            </div>
        </div>
    );
};

export default User;