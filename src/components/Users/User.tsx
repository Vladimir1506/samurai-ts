import React from 'react';
import {UserType} from '../../redux/usersPage-reducer';
import classes from './User.module.css'
import defaultUserImage from '../../assets/images/default-user.png'
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UserPropsType = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}
const User = ({user, follow, unfollow}: UserPropsType) => {
    const followButtonHandler = () => {
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {}, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                follow(user.id)
            }
        })
    }
    const unfollowButtonHandler = () => {
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
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