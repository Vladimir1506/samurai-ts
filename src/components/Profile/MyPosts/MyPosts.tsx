import React, {ChangeEvent, KeyboardEvent} from 'react';
import Post from './Post/Post';
import {PostType} from '../../../redux/store';

type MyPostsPropsType = {
    newPostText: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
    posts: Array<PostType>
}
const MyPosts = ({newPostText, onChange, posts, addPost}: MyPostsPropsType) => {
    const allPosts = posts.map((post: PostType) => <Post key={post.id} post={post}/>)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key !== 'Enter') return
        addPost()
        e.preventDefault()
    }

    return (
        <div>
            My posts
            <div>
                <textarea value={newPostText} onChange={onChange} onKeyPress={onKeyPressHandler}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {allPosts}
            </div>
        </div>
    )
}
export default MyPosts