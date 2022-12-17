import {changeMessageTextValueActionType, ContactType, MessagesType, sendMessageActionType} from './store';
import {AnyAction} from 'redux';

export type messagesPageStateType = {
    contacts: Array<ContactType>
    messages: MessagesType
}
const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_TEXT_VALUE = 'CHANGE-MESSAGE-TEXT-VALUE'
export const sendMessageActionCreator = (id: string, text: string): sendMessageActionType => ({
    type: SEND_MESSAGE,
    id,
    text
})
export const changeMessageTextValueActionCreator = (id: string, text: string): changeMessageTextValueActionType => ({
    type: CHANGE_MESSAGE_TEXT_VALUE,
    id,
    text
})

const initState = {

    contacts: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Peter'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Liza'},
    ],
    messages: {
        '1': {
            messageText: '',
            messagesArray: [
                'Hello Misha!',
                'How are you?',
                'Fine!',
            ]
        },
        '2': {
            messageText: '',
            messagesArray: [
                'Hello Peter!',
                'How are you?',
                'Fine!',
            ]
        },
        '3': {
            messageText: '',
            messagesArray: [
                'Hello Alex!',
                'How are you?',
                'Fine!',
            ]
        },
        '4': {
            messageText: '',
            messagesArray: [
                'Hello Victor!',
                'How are you?',
                'Fine!',
            ]
        },
        '5': {
            messageText: '',
            messagesArray: []
        },
    }

}
export const messagePageReducer = (state: messagesPageStateType = initState, action: AnyAction) => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT_VALUE:
            action.id && (state.messages[action.id].messageText = action.text)
            return state
        case SEND_MESSAGE:
            action.id && state.messages[action?.id].messagesArray.push(action.text)
            action.id && (state.messages[action.id].messageText = '')
            return state
        default:
            return state
    }
}