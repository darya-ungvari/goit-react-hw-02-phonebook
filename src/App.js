import './App.css';
import s from './Components/PhoneBook.module.css'
import { Component } from 'react';
import Form from './Components/Form';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  filteredContacts = () => {
    return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase())) 
   }

  // ф-ция, срабатывает на инпуте фильтра
  changeFilter = e => {
    // в стейт записывается текущее значение из формы
    this.setState({ filter: e.currentTarget.value });
  };

  invalidParams = (contact) => {
    let existedContact = this.state.contacts.find(i => i.name === contact.name);
    return existedContact ? true : false;
    //  contact.name === this.state.name
  }


  addNewContact = (contact) => {

    if (this.invalidParams(contact)) {
      alert(`${contact.name} already exist`)
      return 
    }
    // обьявлена переменная - копия старого массива - куда записываеться новый массив
   let newContacts = this.state.contacts;
  //  в новый массив записываеться новый обьект с ключами нейм и айди
   newContacts.push(contact)
  //  обновляеться старый массив
  this.setState({['contacts']: newContacts})

  // или распыляем в старый-новый массив
  // this.setState({['contacts']: [...this.state.contacts, contact]}) 

  }


  render() {
    return (  
      <div>
        <h1 className={s.title}>PhoneBook</h1>
        <Form  addNewContact={this.addNewContact}></Form>
        <h2 className={s.title}>Contacts</h2>
        <Filter  onChange={this.changeFilter}></Filter>
        <ContactList contacts={this.filteredContacts()}></ContactList>
      </div>
    );
  }
}

export default App;