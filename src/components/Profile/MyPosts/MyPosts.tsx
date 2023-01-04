import React, {ChangeEvent, KeyboardEvent} from 'react';
import Post from './Post/Post';
import {MyPostsPropsType, PostType} from './MyPostsContainer';


const MyPosts: React.FC<MyPostsPropsType> = ({newPostText, onChange, posts, addPost}: MyPostsPropsType) => {
    const allPosts = posts.map((post: PostType) => <Post key={post.id} post={post}/>)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key !== 'Enter') return
        addPost()
        e.preventDefault()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value)

    return (
        <div>
            My posts
            <div>
                <textarea value={newPostText} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {allPosts}
            </div>
        </div>
    )
}
export default MyPosts