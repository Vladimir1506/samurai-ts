import {AnyAction} from 'redux';
import {PostType} from '../components/Profile/MyPosts/MyPostsContainer';

export type ProfilePageStateType = {
    posts: Array<PostType>,
    newPostText: string,
}
const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT_VALUE = 'CHANGE-POST-TEXT-VALUE'

const initState = {
    posts: [
        {id: 1, postText: 'POST1', likesCount: 4},
        {id: 2, postText: 'POST2', likesCount: 2},
        {id: 3, postText: 'POST3', likesCount: 6},
        {id: 4, postText: 'POST4', likesCount: 1},
    ],
    newPostText: '',
}
export const profilePageReducer = (state: ProfilePageStateType = initState, action: AnyAction): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, newPostText: '', posts: [...state.posts, {
                    id: state.posts.length + 1,
                    postText: state.newPostText,
                    likesCount: 0
                }]
            }
        case CHANGE_POST_TEXT_VALUE:
            return {...state, newPostText: action?.text || ''}
        default:
            return state
    }
}

export const addPostAC = (): AnyAction => ({type: ADD_POST})
export const changePostTextValueAC = (text: string): AnyAction => ({
    type: CHANGE_POST_TEXT_VALUE,
    text
})