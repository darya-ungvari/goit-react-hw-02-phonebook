import './App.css';
import React from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList'

class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }

  


  onFormSubmit = (contact) => {
    console.log(contact);
    this.setState({ contacts: [...this.state.contacts, contact]})
}

  render() { 
    return(
      <>
        <Form onFormSubmit={this.onFormSubmit}></Form>
        <ContactList 
          contactsArray={this.state.contacts}
        ></ContactList>


      
      
      </>
    )
  }
}


export default App;
