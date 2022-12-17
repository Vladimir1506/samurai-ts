import {ActionType, changeMessageTextValueActionType, ContactType, MessagesType, sendMessageActionType} from './store';

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
export const messagePageReducer = (state: messagesPageStateType, action: ActionType) => {
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