import {
    addPost, deletePost,
    profilePageReducer,
    ProfilePageStateType,
    ProfileType
} from 'redux/profilePageReducer/profilePage-reducer';

let initialState: ProfilePageStateType
beforeEach(() => {
    initialState = {
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
})
it('the length of posts should be increased', () => {
    const newPostText = 'NewPost'
    const action = addPost(newPostText)
    const newState = profilePageReducer(initialState, action)
    expect(newState.posts.length).toBe(5)
})

it('the last post postText should be "NewPost"', () => {
    const newPostText = 'NewPost'
    const action = addPost(newPostText)
    const newState = profilePageReducer(initialState, action)
    expect(newState.posts[newState.posts.length - 1].postText).toBe('NewPost')
})

it('the length of posts should be decreased', () => {
    const action = deletePost(4)
    const newState = profilePageReducer(initialState, action)
    expect(newState.posts.length).toBe(3)
})