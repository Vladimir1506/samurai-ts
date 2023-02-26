import React from 'react';
import classes from './Profile.module.css';
import {ProfilePagePropsType} from './ProfileContainer';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props: ProfilePagePropsType) => {
    return (
        props.profile && <div>
            NAME: {props.profile.fullName}
            <div>
                <img className={classes.img}
                     src={props.profile.photos.large || 'https://img1.goodfon.ru/original/2560x1024/9/5f/minions-minony-multfilm-1676.jpg'}
                     alt={props.profile.fullName + '\'s photo'}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>ava+description</div>
        </div>
    );
};

export default ProfileInfo;