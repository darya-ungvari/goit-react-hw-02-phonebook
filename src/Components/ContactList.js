import s from './PhoneBook.module.css';
import React from 'react';

import { v1 as uuidv1 } from 'uuid';

// const nameId = uuidv1();

const ContactList = (props) => (
    <div className={s.container}>
        <h2>Contacts</h2>
        <ul>
            {props.contacts.map(contact => (
                <li key={uuidv1()}>
                    {contact.name}
                </li>
            ))}
        </ul>
    </div>

)
    
export default ContactList;