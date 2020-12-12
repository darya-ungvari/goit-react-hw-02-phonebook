import s from './PhoneBook.module.css';
import React from 'react';
import PropTypes from 'prop-types';


const ContactList = ({ contacts }) => (
    <div className={s.container}>
        <h2>Contacts</h2>
        <ul>
            {contacts.map(({ id, name, number}) => (
                <li key={id}>
                    <span className={s.name}>{name}:</span> {number}
                </li>
            ))}
        </ul>
    </div>
)

ContactList.propTypes = {
 contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
//   onDeleteContact: PropTypes.func.isRequired,
    
  }
    
export default ContactList;