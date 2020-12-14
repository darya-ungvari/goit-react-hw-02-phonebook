import s from './PhoneBook.module.css';
import React from 'react';
import PropTypes from 'prop-types';



const ContactList = ({ contacts, onDelete }) => (
    <div className={s.container}>
        <ul>
            {contacts.map(({ id, name, number}) => (
                <li key={id}>
                    <span className={s.name}>{name}:</span> {number}
                    <button 
                        type="button"
                        onClick={() => onDelete(id)} 
                        className={s.deleteBtn}>delete</button> 
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