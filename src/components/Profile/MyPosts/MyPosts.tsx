import React from 'react';
import Post from './Post/Post';
import {PostType} from '../../../state';

type MyPostsPropsType = {
    posts: Array<PostType>
}
const MyPosts = ({posts}: MyPostsPropsType) => {
    const allPosts = posts.map((post: PostType) => <Post post={post}/>)
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {allPosts}
            </div>
        </div>
    )
}
export default MyPosts