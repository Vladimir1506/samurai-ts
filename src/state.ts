export type StateType = {
    profilePage: {
        posts: Array<PostType>,
        newPostText: string,
    },
    messagesPage: {
        contacts: Array<ContactType>
        messages: MessagesType
    },
}
export type MessagesType = { [contactId: number]: Array<string> }
export type PostType = {
    id: number,
    postText: string,
    likesCount: number
}
export type ContactType = {
    id: number,
    name: string,
}

export type StoreType = {
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: (store: StoreType) => void) => void
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type ActionType = {
    type: string
    postMessage?: string
    newPostText?: string
}
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: 'POST1', likesCount: 4},
                {id: 2, postText: 'POST2', likesCount: 2},
                {id: 3, postText: 'POST3', likesCount: 6},
                {id: 4, postText: 'POST4', likesCount: 1},
            ],
            newPostText: '',
        },
        messagesPage: {
            contacts: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Peter'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Liza'},
            ],
            messages: {
                '1': [
                    'Hello Misha!',
                    'How are you?',
                    'Fine!',
                ],
                '2': [
                    'Hello Peter!',
                    'How are you?',
                    'Fine!',
                ],
                '3': [
                    'Hello Alex!',
                    'How are you?',
                    'Fine!',
                ],
                '4': [
                    'Hello Victor!',
                    'How are you?',
                    'Fine!',
                ],

            }
        },
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const posts = this._state.profilePage.posts
            const postMessage = action.postMessage
            posts.push({
                id: posts.length + 1,
                postText: postMessage ? postMessage : '',
                likesCount: 0
            })
            this.dispatch({type: 'CHANGE-POST-TEXT-VALUE', newPostText: ''})
            this._callSubscriber(this)
        } else if (action.type === 'CHANGE-POST-TEXT-VALUE') {
            const newPostText = action.newPostText
            this._state.profilePage.newPostText = newPostText ? newPostText : ''
            this._callSubscriber(this)
        }
    }
}

