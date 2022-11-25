import React from 'react';
import {NavLink} from 'react-router-dom';
import {ContactType} from '../../state';

type ContactPropsType = { contact: ContactType }
const Contact = ({contact}: ContactPropsType) => {
    const path = '/dialogs/' + contact.id
    return <div className="contact"><NavLink to={path}> {contact.name}</NavLink></div>;
};

export default Contact;