import React from 'react';
import User from './User';
import {UserType} from '../../redux/usersPage-reducer';

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingUsersIds: string[]
    toggleFollowedUserId: (userId: string) => void

}
const Users = ({users, follow, unfollow, followingUsersIds, toggleFollowedUserId}: UsersPropsType) => {

    const mappedUsers = users.map((user, index) => (<User
        key={index}
        user={user}
        follow={follow}
        unfollow={unfollow}
        isFollowingInProgress={!!followingUsersIds.find(id => id === user.id)}
        toggleFollowedUserId={toggleFollowedUserId}
    />))

    return (
        <div>
            {mappedUsers}
        </div>
    );
};

export default Users;