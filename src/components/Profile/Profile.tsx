import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePagePropsType} from './ProfileContainer';
import Preloader from '../common/Preloader';


const Profile: React.FC<ProfilePagePropsType> = (props: ProfilePagePropsType) =>
    !props.profile ? <Preloader/> : (<div>
        <ProfileInfo {...props}/>
        <MyPostsContainer/>
    </div>)

export default Profile