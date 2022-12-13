import React from 'react';
import classes from './Dialogs.module.css';
import {ContactType, MessagesType} from '../../state';
import {NavLink, Route} from 'react-router-dom';
import Messages from './Messages';

type ContactsPropsType = {
    contacts: Array<ContactType>
    messages: MessagesType
}
const Contacts = ({contacts, messages}: ContactsPropsType) => {
    const allContacts = contacts.map((contact: ContactType) => {
        return (<div>
            <NavLink
                to={'/dialogs/' + contact.id}>{contact.name}</NavLink>
        </div>)
    })
    const messagesRoutes = Object.keys(messages).map((objKey: any) => {
        return <Route key={objKey} path={'/dialogs/' + objKey} render={() => {
            console.log(objKey)
            console.log(typeof objKey)
            return <Messages messagesArray={messages[objKey]}/>
        }}/>

    })
    return (
        <div className={classes.contacts}>
            <div>   {allContacts}</div>
            <div>{messagesRoutes}</div>
        </div>
    );
};

export default Contacts;