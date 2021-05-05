import './App.css';
import React from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  }

  
  onFormSubmit = (contact) => {
    let existedName = this.state.contacts.find((i) => i.name === contact.name)
    if (existedName) {
      alert(`${contact.name} is already in contacts`)
    } else {this.setState({ contacts: [...this.state.contacts, contact]})}

}

  filteredContacts = () => {
    if (this.state.filter !== '') {
      // i - {id: '', name: '', number: ''}
      return this.state.contacts.filter((i) => i.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

    return this.state.contacts;
  }

  onFilterChange = (e) => {
    const filter = e.target.value;
    this.setState({ filter: filter })
  }

  onDeleteContact = (id) => {
    console.log(id);
    this.setState({ contacts: this.state.contacts.filter(item => item.id !== id) })
  }
 
  render() { 
    return(
      <>
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.onFormSubmit}></Form>
        <h2>Contacts</h2>
        <Filter filteredArray={this.filteredContacts}
        onChangeFilter={this.onFilterChange}>
        </Filter>
        <ContactList 
          deleteContact={this.onDeleteContact}
          contactsArray={this.filteredContacts()}>
        </ContactList>
      </>
    )
  }
}


export default App;
