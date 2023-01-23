import React from 'react';
import {UserType} from '../../redux/usersPage-reducer';
import classes from './User.module.css'
import defaultUserImage from '../../assets/images/default-user.png'
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type UserPropsType = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}
const User = ({user, follow, unfollow}: UserPropsType) => {
    const followButtonHandler = () => {
        usersAPI.follow(user.id).then(data => {
            if (data.resultCode === 0) {
                follow(user.id)
            }
        })
    }
    const unfollowButtonHandler = () => {
        usersAPI.unfollow(user.id).then(data => {
            if (data.resultCode === 0) {
                unfollow(user.id)
            }
        })
    }
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <div><img className={classes.img}
                          src={user.photos.small ?? defaultUserImage}
                          alt="Avatar"/></div>
                {user.followed ?
                    <button onClick={unfollowButtonHandler}>Unfollow</button> :
                    <button onClick={followButtonHandler}>Follow</button>
                }
            </div>
            <NavLink to={'profile/' + user.id}>
                <div><span>{user.name}</span></div>
            </NavLink>
            <div className={classes.address}>
                {/*<div>{'user.address.country'}</div>*/}
                {/*<div>{'user.address.city'}</div>*/}
            </div>
        </div>
    );
};

export default User;