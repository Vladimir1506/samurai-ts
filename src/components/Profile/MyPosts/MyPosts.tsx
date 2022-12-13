import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {PostType} from '../../../state';

type MyPostsPropsType = {
    addPost: (postMessage: string) => void
    changePostTextValue: (newPostText: string) => void
    profileData: {
        posts: Array<PostType>
        newPostText: string
    }
}
const MyPosts = ({addPost, changePostTextValue, profileData: {posts, newPostText}}: MyPostsPropsType) => {
    const allPosts = posts.map((post: PostType) => <Post key={post.id} post={post}/>)
    const addNewPost = () => (newPostText.trim() != '') && addPost(newPostText)
    const changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => changePostTextValue(e.currentTarget.value)

    return (
        <div>
            My posts
            <div>
                <textarea value={newPostText} onChange={changePostText}/>
                <button onClick={addNewPost}>Add post</button>
            </div>
            <div>
                {allPosts}
            </div>
        </div>
    )
}
export default MyPosts