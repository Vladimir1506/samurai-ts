import {AnyAction} from 'redux';
import {ContactType} from '../components/Dialogs/Contacts';

export type MessageType = {
    messageText: string,
    messagesArray: Array<string>
}
type MessagesType = {
    [contactId: string]: MessageType
}
export type messagesPageStateType = {
    contacts: Array<ContactType>
    messages: MessagesType
}

const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_TEXT_VALUE = 'CHANGE-MESSAGE-TEXT-VALUE'

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
export const messagePageReducer = (state: messagesPageStateType = initState, action: AnyAction): messagesPageStateType => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT_VALUE:
            return {
                ...state,
                messages: {...state.messages, [action.id]: {...state.messages[action.id], messageText: action.text}}
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.id]: {
                        ...state.messages[action.id],
                        messageText: '',
                        messagesArray: [...state.messages[action.id].messagesArray, action.text]
                    }
                }
            }
        default:
            return state
    }
}
export const sendMessageAC = (id: string, text: string) => ({
    type: SEND_MESSAGE,
    id,
    text
})
export const changeMessageTextValueAC = (id: string, text: string) => ({
    type: CHANGE_MESSAGE_TEXT_VALUE,
    id,
    text
})