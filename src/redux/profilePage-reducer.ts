import {AddPostActionType, changePostTextValueActionType, PostType} from './store';
import {AnyAction} from 'redux';

export type ProfilePageStateType = {
    posts: Array<PostType>,
    newPostText: string,
}
const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT_VALUE = 'CHANGE-POST-TEXT-VALUE'
export const addPostActionCreator = (text: string): AddPostActionType => ({type: ADD_POST, text})
export const changePostTextValueActionCreator = (text: string): changePostTextValueActionType => ({
    type: CHANGE_POST_TEXT_VALUE,
    text
})
const initState = {
    posts: [
        {id: 1, postText: 'POST1', likesCount: 4},
        {id: 2, postText: 'POST2', likesCount: 2},
        {id: 3, postText: 'POST3', likesCount: 6},
        {id: 4, postText: 'POST4', likesCount: 1},
    ],
    newPostText: '',
}
export const profilePageReducer = (state: ProfilePageStateType = initState, action: AnyAction) => {
    switch (action.type) {
        case ADD_POST:
            const posts = state.posts
            posts.push({
                id: posts.length + 1,
                postText: action?.text || '',
                likesCount: 0
            })
            state.newPostText = ''
            return state

        case CHANGE_POST_TEXT_VALUE:
            state.newPostText = action?.text || ''
            return state
        default:
            return state
    }
}