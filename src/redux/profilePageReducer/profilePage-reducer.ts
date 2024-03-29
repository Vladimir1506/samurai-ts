import {PostType} from 'components/Profile/MyPosts/MyPostsContainer';
import {profileAPI, usersAPI} from 'api/api';
import {AppDispatch} from 'redux/redux-store';


export type ProfilePageStateType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType,
    status: string
}
type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
type PhotosType = {
    'small': null | string
    'large': null | string
}
export type ProfileType = null | {
    aboutMe: string
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string
    fullName: string,
    userId: string,
    photos: PhotosType
}
const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const initState: ProfilePageStateType = {
    posts: [
        {id: 1, postText: 'POST1', likesCount: 4},
        {id: 2, postText: 'POST2', likesCount: 2},
        {id: 3, postText: 'POST3', likesCount: 6},
        {id: 4, postText: 'POST4', likesCount: 1},
    ],
    newPostText: '',
    profile: {} as ProfileType,
    status: 'No status'
}
export const profilePageReducer = (state: ProfilePageStateType = initState, action: ProfilePageActionsType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, newPostText: '', posts: [...state.posts, {
                    id: state.posts.length + 1,
                    postText: action.payload.postText,
                    likesCount: 0
                }]
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload.postId)}
        case SET_PROFILE:
            return {...state, profile: action.payload.profile}
        case SET_STATUS:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

export type ProfilePageActionsType = addPostACType
    | SetProfileACType
    | SetStatusACType
    | deletePostACType
type addPostACType = ReturnType<typeof addPost>
export const addPost = (postText: string) => ({type: ADD_POST, payload: {postText}}) as const
type deletePostACType = ReturnType<typeof deletePost>

export const deletePost = (postId: number) => ({type: DELETE_POST, payload: {postId}}) as const


type SetProfileACType = ReturnType<typeof setProfile>
type SetStatusACType = ReturnType<typeof setStatus>

export const setProfile = (profile: ProfileType) => ({
    type: SET_PROFILE,
    payload: {profile}
}) as const

const setStatus = (status: string) => ({
    type: SET_STATUS,
    payload: {status}
}) as const

export const getProfile = (userId: string) => (dispatch: AppDispatch) => {
    dispatch(setProfile(null))
    userId && usersAPI.getProfile(userId).then(data => {
        setTimeout(() => {
            dispatch(setProfile(data))
        }, 700)
    })
}

export const getUserStatus = (userId: string) => (dispatch: AppDispatch) => {
    profileAPI.getStatus(userId).then((status) => dispatch(setStatus(status)))
}

export const updateStatus = (status: string) => (dispatch: AppDispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
