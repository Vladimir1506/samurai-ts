import React from 'react';
import classes from './Profile.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.img}
                     src="https://img1.goodfon.ru/original/2560x1024/9/5f/minions-minony-multfilm-1676.jpg"
                     alt="Switzerland"/>
            </div>
            <div>ava+description</div>
        </div>
    );
};

export default ProfileInfo;