// import {profilePageReducer} from './profilePage-reducer';
// import {messagePageReducer} from './messagePage-reducer';

// export type StoreType = {
//     _callSubscriber: (store: StoreType) => void
//     subscribe: (observer: (store: StoreType) => void) => void
//     _state: StateType
//     getState: () => StateType
//     dispatch: (action: ActionType) => void
// }
// export type StateType = {
//     profilePage: {
//         posts: Array<PostType>,
//         newPostText: string,
//     },
//     messagesPage: {
//         contacts: Array<ContactType>
//         messages: MessagesType
//     },
// }
export type MessagesType = {
    [contactId: string]: MessageType
}
export type MessageType = {
    messageText: string,
    messagesArray: Array<string>
}
export type PostType = {
    id: number,
    postText: string,
    likesCount: number
}
export type ContactType = {
    id: number,
    name: string,
}

export type ActionType = changePostTextValueActionType
    | AddPostActionType
    | sendMessageActionType
    | changeMessageTextValueActionType
export type changePostTextValueActionType = {
    type: 'CHANGE-POST-TEXT-VALUE'
    text: string
}
export type AddPostActionType = {
    type: 'ADD-POST'
    text: string
}
export type sendMessageActionType = {
    type: 'SEND-MESSAGE'
    id: string
    text: string
}
export type changeMessageTextValueActionType = {
    type: 'CHANGE-MESSAGE-TEXT-VALUE'
    id: string
    text: string
}

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, postText: 'POST1', likesCount: 4},
//                 {id: 2, postText: 'POST2', likesCount: 2},
//                 {id: 3, postText: 'POST3', likesCount: 6},
//                 {id: 4, postText: 'POST4', likesCount: 1},
//             ],
//             newPostText: '',
//         },
//         messagesPage: {
//             contacts: [
//                 {id: 1, name: 'Misha'},
//                 {id: 2, name: 'Peter'},
//                 {id: 3, name: 'Alex'},
//                 {id: 4, name: 'Victor'},
//                 {id: 5, name: 'Liza'},
//             ],
//             messages: {
//                 '1': {
//                     messageText: '',
//                     messagesArray: [
//                         'Hello Misha!',
//                         'How are you?',
//                         'Fine!',
//                     ]
//                 },
//                 '2': {
//                     messageText: '',
//                     messagesArray: [
//                         'Hello Peter!',
//                         'How are you?',
//                         'Fine!',
//                     ]
//                 },
//                 '3': {
//                     messageText: '',
//                     messagesArray: [
//                         'Hello Alex!',
//                         'How are you?',
//                         'Fine!',
//                     ]
//                 },
//                 '4': {
//                     messageText: '',
//                     messagesArray: [
//                         'Hello Victor!',
//                         'How are you?',
//                         'Fine!',
//                     ]
//                 },
//                 '5': {
//                     messageText: '',
//                     messagesArray: []
//                 },
//             }
//         },
//     },
//     _callSubscriber() {
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profilePageReducer(this._state.profilePage, action)
//         this._state.messagesPage = messagePageReducer(this._state.messagesPage, action)
//         this._callSubscriber(this)
//     }
// }

