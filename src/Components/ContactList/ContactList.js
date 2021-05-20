import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contactsArray, deleteContact }) => {
  console.log(contactsArray);
  return (
    <>
      <ul>
        {contactsArray.map(contact => (
          <li key={contact.id}>
            <span className={s.contact}>{contact.name}:</span>{' '}
            <span className={s.contactNumber}>{contact.number}</span>
            <button
              className={s.button}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
