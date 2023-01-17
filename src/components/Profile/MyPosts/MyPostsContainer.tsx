import React from 'react';
import {addPost, changePostTextValue} from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

export type PostType = {
    id: number,
    postText: string,
    likesCount: number
}
type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchToPropsType = {
    onChange: (text: string) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    onChange: (text: string) => dispatch(changePostTextValue(text)),
    addPost: () => dispatch(addPost())

})
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
