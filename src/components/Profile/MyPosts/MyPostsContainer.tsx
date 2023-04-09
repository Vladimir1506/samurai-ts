import React from 'react';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from 'redux/redux-store';
import {Dispatch} from 'redux';
import {addPost} from 'redux/profilePageReducer/profilePage-reducer';

export type PostType = {
    id: number,
    postText: string,
    likesCount: number
}
type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (postText: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    posts: state.profilePage.posts
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    addPost: (postText: string) => dispatch(addPost(postText))

})
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
