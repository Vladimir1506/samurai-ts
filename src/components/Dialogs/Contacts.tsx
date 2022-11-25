import React from 'react';
import classes from './Dialogs.module.css';
import Contact from './Contact';
import {ContactType} from '../../state';

type ContactsPropsType = {
    contacts: Array<ContactType>
}
const Contacts = ({contacts}: ContactsPropsType) => {
    const allContacts = contacts.map((contact: ContactType) => <Contact contact={contact}/>)
    return (
        <div className={classes.contacts}>
            {allContacts}
        </div>
    );
};

export default Contacts;