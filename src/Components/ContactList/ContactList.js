

const ContactList = ({ contactsArray, deleteContact }) => {


    console.log(contactsArray);
    return (
        
        <>
            <ul>
                {contactsArray.map((contact) => <li 
                key={contact.id}>{contact.name} : {contact.number}
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
                )}
            </ul>
        </>
    )
}

export default ContactList;
