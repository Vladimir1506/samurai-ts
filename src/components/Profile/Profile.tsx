import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';
import {ActionType, PostType} from '../../redux/store';

type ProfilePropsType = {
    dispatch: (action: ActionType) => void
    profileData: {
        posts: Array<PostType>,
        newPostText: string
    }
}

const Profile = (props: ProfilePropsType) =>
    <div>
        <ProfileInfo/>
        <MyPosts dispatch={props.dispatch}
                 profileData={props.profileData}/>
    </div>

export default Profile