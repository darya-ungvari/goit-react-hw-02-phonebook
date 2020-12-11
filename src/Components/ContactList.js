import s from './PhoneBook.module.css';
import React from 'react';

import { v1 as uuidv1 } from 'uuid';

const ContactList = (props) => (
    <div className={s.container}>
        <h2>Contacts</h2>
        <ul>
            {props.contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name}
                </li>
            ))}
        </ul>
    </div>

)
    
export default ContactList;