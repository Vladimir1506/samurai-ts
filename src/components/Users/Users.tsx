import React from 'react';
import User from './User';
import {UsersPropsType} from './UsersContainer';


const Users = (props: UsersPropsType) => {
    !props.users.length && props.setUsers([
        {
            id: '1',
            name: 'Nicole',
            avatar: 'https://i.pinimg.com/736x/bb/25/b1/bb25b1880aebfef78d0866b438a579d6.jpg',
            followed: true,
            address: {
                country: 'PMR',
                city: 'Rybnitsa'
            }
        },
        {
            id: '2',
            name: 'Michael',
            avatar: 'https://i.pinimg.com/736x/bb/25/b1/bb25b1880aebfef78d0866b438a579d6.jpg',
            followed: false,
            address: {
                country: 'PMR',
                city: 'Tiraspol'
            }
        },
    ])
    const mappedUsers = props.users.map(user => <User follow={props.follow}
                                                      unfollow={props.unfollow} user={user}
                                                      key={user.id}/>)
    return <div>{mappedUsers}</div>

};

export default Users;