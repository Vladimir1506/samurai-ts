import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';
import {PostType} from '../../state';

type ProfilePropsType = {
    posts: Array<PostType>
}

const Profile = ({posts}: ProfilePropsType) =>
    <div>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>

export default Profile