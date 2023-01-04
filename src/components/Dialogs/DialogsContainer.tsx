import React from 'react';
import classes from './Dialogs.module.css';
import {Route} from 'react-router-dom';
import Messages from './Messages';
import Contacts from './Contacts';
import {DialogsContainerPropsType} from './DialogsSuperContainer';


const DialogsContainer: React.FC<DialogsContainerPropsType> = ({
                                                                   messagePage: {contacts, messages},
                                                                   onChangeMessageText,
                                                                   onSendMessage
                                                               }: DialogsContainerPropsType) => {
    const messagesRoutes = Object.keys(messages).map((contactId: string) => {
        const onChangeMessageTextHandler = (text: string) => onChangeMessageText(contactId, text)
        const onSendMessageHandler = (text: string) => onSendMessage(contactId, text)
        const {messageText, messagesArray} = messages[contactId]
        const routeMessagesRender = () => <Messages
            onChange={onChangeMessageTextHandler}
            onSend={onSendMessageHandler}
            messageText={messageText}
            messagesArray={messagesArray}/>
        return <Route key={contactId} path={'/dialogs/' + contactId} render={routeMessagesRender}/>
    })
    return <div className={classes.contacts}>
        <Contacts contacts={contacts}/>
        <div>{messagesRoutes}</div>
    </div>
}

export default DialogsContainer;