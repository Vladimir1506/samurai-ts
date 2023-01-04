import React from 'react';
import {NavLink} from 'react-router-dom';

export type ContactType = {
    id: number,
    name: string,
}
type ContactsPropsType = {
    contacts: ContactType[]
}
const Contacts = ({contacts}: ContactsPropsType) => {
    const allContacts = contacts.map((contact: ContactType) =>
        (<div key={contact.id}>
            <NavLink to={'/dialogs/' + contact.id}>{contact.name}</NavLink>
        </div>)
    )
    return <div>{allContacts}</div>
};

export default Contacts;