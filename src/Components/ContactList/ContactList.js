

const ContactList = ({ contactsArray }) => {


    console.log(contactsArray);
    return (
        
        <>
            <ul>
                {contactsArray.map((contact) => <li key={contact.id}>{contact.name}</li>
                )}
            </ul>
        </>
    )
}

export default ContactList;
