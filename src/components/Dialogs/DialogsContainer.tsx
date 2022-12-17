import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {ContactType,} from '../../redux/store';
import {NavLink, Route} from 'react-router-dom';
import {changeMessageTextValueActionCreator, sendMessageActionCreator} from '../../redux/messagePage-reducer';
import {Store} from 'redux';
import {store} from '../../redux/redux-store';
import Dialogs from './Dialogs';

type ContactsPropsType = { store: Store }
const DialogsContainer = ({store: {dispatch}}: ContactsPropsType) => {
    const state = store.getState()
    const {contacts, messages} = state.messagePageReducer
    const allContacts = contacts.map((contact: ContactType) =>
        (<div key={contact.id}>
            <NavLink to={'/dialogs/' + contact.id}>{contact.name}</NavLink>
        </div>)
    )
    const messagesRoutes = Object.keys(messages).map((objKey: any) => {
        const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(changeMessageTextValueActionCreator(objKey, e.currentTarget.value))
        const onSendMessage = (text: string) => dispatch(sendMessageActionCreator(objKey, text))
        const {messageText, messagesArray} = messages[objKey]
        const routeMessagesRender = () => <Dialogs onSend={onSendMessage}
                                                   onChange={onChangeMessageText}
                                                   messageText={messageText}
                                                   messagesArray={messagesArray}/>
        return <Route key={objKey} path={'/dialogs/' + objKey} render={routeMessagesRender}/>
    })
    return (
        <div className={classes.contacts}>
            <div>{allContacts}</div>
            <div>{messagesRoutes}</div>
        </div>
    );
};

export default DialogsContainer;