import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';
import {PostType} from '../../state';

type ProfilePropsType = {
    addPost: (post: string) => void
    changePostTextValue: (postText: string) => void
    profileData: {
        posts: Array<PostType>,
        newPostText: string
    }
}

const Profile = (props: ProfilePropsType) =>
    <div>
        <ProfileInfo/>
        <MyPosts changePostTextValue={props.changePostTextValue}
                 addPost={props.addPost}
                 profileData={props.profileData}/>
    </div>

export default Profile