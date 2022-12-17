import React, {ChangeEvent} from 'react';
import {addPostActionCreator, changePostTextValueActionCreator} from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import {Store} from 'redux';

type MyPostsPropsType = { store: Store }
const MyPostsContainer = ({store: {dispatch, ...store}}: MyPostsPropsType) => {
    const {newPostText, posts} = store.getState().profilePageReducer
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(changePostTextValueActionCreator(e.currentTarget.value))
    const addNewPost = () => (newPostText.trim() != '') && dispatch(addPostActionCreator(newPostText.trim()))

    return <MyPosts posts={posts} newPostText={newPostText} onChange={onChangeText} addPost={addNewPost}/>
}
export default MyPostsContainer