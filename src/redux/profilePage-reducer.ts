import {PostType} from '../components/Profile/MyPosts/MyPostsContainer';

export type ProfilePageStateType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: any
}
const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT_VALUE = 'CHANGE-POST-TEXT-VALUE'
const SET_PROFILE = 'SET-PROFILE'

const initState = {
    posts: [
        {id: 1, postText: 'POST1', likesCount: 4},
        {id: 2, postText: 'POST2', likesCount: 2},
        {id: 3, postText: 'POST3', likesCount: 6},
        {id: 4, postText: 'POST4', likesCount: 1},
    ],
    newPostText: '',
    profile: null
}
export const profilePageReducer = (state: ProfilePageStateType = initState, action: ProfilePageActionType): ProfilePageStateType => {
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
            return {...state, newPostText: action.payload.text || ''}
        case SET_PROFILE:
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}

type ProfilePageActionType = addPostACType
    | changePostTextValueACType
    | SetProfileACType

type addPostACType = ReturnType<typeof addPost>
export const addPost = () => ({type: ADD_POST}) as const

type changePostTextValueACType = ReturnType<typeof changePostTextValue>
export const changePostTextValue = (text: string) => ({
    type: CHANGE_POST_TEXT_VALUE,
    payload: {text}
}) as const

type SetProfileACType = ReturnType<typeof setProfile>
export const setProfile = (profile: any) => ({
    type: SET_PROFILE,
    payload: {profile}
}) as const