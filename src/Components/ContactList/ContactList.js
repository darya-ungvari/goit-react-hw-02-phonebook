import s from './ContactList.module.css'

const ContactList = ({ contactsArray, deleteContact }) => {


    console.log(contactsArray);
    return (
        
        <>
            <ul>
                {contactsArray.map((contact) => <li 
                
                key={contact.id}><span className={s.contact}>{contact.name}:</span> <span className={s.contactNumber}>{contact.number}</span>
                <button
                className={s.button} 
                onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
                )}
            </ul>
        </>
    )
}

export default ContactList;
