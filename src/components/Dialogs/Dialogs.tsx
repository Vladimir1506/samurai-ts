import React from 'react';
import classes from './Dialogs.module.css';
import {ContactType, MessagesType} from '../../state';
import Contacts from './Contacts';

type DialogsPropsType = {
    messagesPage: {
        contacts: Array<ContactType>
        messages: MessagesType
    }
}
const Dialogs = ({messagesPage: {contacts, messages}}: DialogsPropsType) => {
    return (
        <div className={classes.contacts}>
            <Contacts contacts={contacts} messages={messages}/>
        </div>
    );
}

export default Dialogs