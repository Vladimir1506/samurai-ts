import React, {ChangeEvent, KeyboardEvent} from 'react';
import Post from './Post/Post';
import {ActionType, PostType} from '../../../state';

type MyPostsPropsType = {
    dispatch: (action: ActionType) => void
    profileData: {
        posts: Array<PostType>
        newPostText: string
    }
}
const MyPosts = ({dispatch, profileData: {posts, newPostText}}: MyPostsPropsType) => {
    const allPosts = posts.map((post: PostType) => <Post key={post.id} post={post}/>)
    const addNewPost = () => (newPostText.trim() != '') && dispatch({type: 'ADD-POST', postMessage: newPostText})
    const changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch({
        type: 'CHANGE-POST-TEXT-VALUE',
        newPostText: e.currentTarget.value
    })
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key !== 'Enter') return
        addNewPost()
        e.preventDefault()
    }

    return (
        <div>
            My posts
            <div>
                <textarea value={newPostText} onChange={changePostText} onKeyPress={onKeyPressHandler}/>
                <button onClick={addNewPost}>Add post</button>
            </div>
            <div>
                {allPosts}
            </div>
        </div>
    )
}
export default MyPosts