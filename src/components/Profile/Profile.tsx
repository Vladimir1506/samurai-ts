import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Store} from 'redux';

type ProfilePropsType = { store: Store }

const Profile = ({store}: ProfilePropsType) =>
    <div>
        <ProfileInfo/>
        <MyPostsContainer store={store}/>
    </div>

export default Profile