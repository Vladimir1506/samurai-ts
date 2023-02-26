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
export const messagePageReducer = (state: messagesPageStateType = initState, action: messagePageActionsType): messagesPageStateType => {
    switch (action.type) {
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
export type messagePageActionsType = onSendMessageActionType
type onSendMessageActionType = ReturnType<typeof onSendMessage>
export const onSendMessage = (id: string, text: string) => ({
    type: SEND_MESSAGE,
    id,
    text
}) as const
