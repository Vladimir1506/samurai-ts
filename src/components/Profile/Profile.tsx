import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile: React.FC = () =>
    <div>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>

export default Profile