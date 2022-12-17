import React from 'react';
import classes from './Dialogs.module.css';
import {ActionType, ContactType, MessagesType} from '../../redux/store';
import Contacts from './Contacts';

type DialogsPropsType = {
    dispatch: (action: ActionType) => void
    messagesPage: {
        contacts: Array<ContactType>
        messages: MessagesType

    }
}
const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.contacts}>
            <Contacts contactsProps={props}/>
        </div>
    );
}

export default Dialogs