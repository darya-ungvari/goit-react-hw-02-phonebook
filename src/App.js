import './App.css';
import { Component } from 'react';
import Form from './Components/Form';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

// import FeedbackCounter from './Components/Feedbacks/FeedbackCounter';


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  // ф-ция, срабатывает на инпуте фильтра
  changeFilter = e => {
    // в стейт записывается текущее значение из формы
    this.setState({ filter: e.currentTarget.value });
  };

  addNewContact = (contact) => {
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
        <Form  addNewContact={this.addNewContact}></Form>
        <ContactList contacts={this.state.contacts}></ContactList>
        <Filter onChange={this.changeFilter}></Filter>
      </div>
    );
  }
}

export default App;