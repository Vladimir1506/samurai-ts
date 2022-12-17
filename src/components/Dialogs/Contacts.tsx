import React from 'react';
import classes from './Dialogs.module.css';
import {
    ActionType,
    ContactType,
    MessagesType,
} from '../../redux/store';
import {NavLink, Route} from 'react-router-dom';
import Messages from './Messages';
import {changeMessageTextValueActionCreator, sendMessageActionCreator} from '../../redux/messagePage-reducer';

type ContactsPropsType = {
    contactsProps: {
        dispatch: (action: ActionType) => void
        messagesPage: {
            contacts: Array<ContactType>
            messages: MessagesType
        }
    }
}
const Contacts = ({contactsProps: {messagesPage: {contacts, messages}, dispatch}}: ContactsPropsType) => {
    const allContacts = contacts.map((contact: ContactType) => {
        return (<div key={contact.id}>
            <NavLink to={'/dialogs/' + contact.id}>{contact.name}</NavLink>
        </div>)
    })
    const messagesRoutes = Object.keys(messages).map((objKey: any) => {
        const onChangeMessageText = (text: string) => {
            dispatch(changeMessageTextValueActionCreator(objKey, text))
        }
        const onSendMessage = (text: string) => {
            dispatch(sendMessageActionCreator(objKey, text))
        }
        const routeMessagesRender = () => <Messages onSend={onSendMessage}
                                                    onChange={onChangeMessageText}
                                                    messageData={messages[objKey]}/>
        return <Route key={objKey} path={'/dialogs/' + objKey} render={routeMessagesRender}/>
    })
    return (
        <div className={classes.contacts}>
            <div>{allContacts}</div>
            <div>{messagesRoutes}</div>
        </div>
    );
};

export default Contacts;