import React from 'react';
import classes from './Dialogs.module.css';
import Contacts from './Contacts';
import Messages from './Messages';
import {ContactType} from '../../state';

type DialogsPropsType = {
    contacts: Array<ContactType>
    messages: Array<string>
}
const Dialogs = ({contacts, messages}: DialogsPropsType) =>
    <div className={classes.dialogs}>
        <Contacts contacts={contacts}/>
        <Messages messages={messages}/>
    </div>

export default Dialogs