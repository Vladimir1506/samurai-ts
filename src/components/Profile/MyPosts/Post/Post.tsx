import React from 'react';
import classes from './Post.module.css';
import {PostType} from '../../../../redux/store';

type PostPropsType = { post: PostType }
const Post = ({post}: PostPropsType) => <div className={classes.item}>
    <img src="https://www.illumination.com/wp-content/uploads/2020/02/stuart-1.png" alt="avatar"/>
    {post.postText}
</div>
export default Post