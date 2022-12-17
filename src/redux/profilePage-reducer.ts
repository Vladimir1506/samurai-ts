import {ActionType, AddPostActionType, changePostTextValueActionType, PostType} from './store';

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
export const profilePageReducer = (state: ProfilePageStateType, action: ActionType) => {
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